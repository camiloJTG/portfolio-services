import model from '../../models/media/images';
import * as interfaces from '../../interfaces/images';
import * as cloudinary from '../../apis/cloudinary';
import * as files from '../../utils/files';

export const createImage = async (
   images: Express.Multer.File[],
   folderName: string,
   ids: string[]
) => {
   try {
      let resultImage = [];
      let imagesWithId: interfaces.IImageWithId[] = [];
      if (typeof ids === 'string') {
         images.map((img, i) => imagesWithId.unshift({ images: img, id: ids }));
      } else {
         images.map((img, i) =>
            imagesWithId.unshift({ images: img, id: ids[i] })
         );
      }
      for (const image of imagesWithId) {
         const findModelId = await model.findOne({ modelId: image.id });
         if (findModelId != null) {
            await files.deleteLocalFile(image.images.path);
            resultImage.unshift({
               result: `The ${image.id} has already registered`,
            });
         }
         const saveInCloudinary = await cloudinary.uploadFile(
            image.images.path,
            folderName
         );
         if (typeof saveInCloudinary === 'undefined') {
            await files.deleteLocalFile(image.images.path);
            resultImage.unshift({ result: `Error in cloudinary upload image` });
         } else {
            let newImage: interfaces.ICreateImage = {
               localUrl: image.images.path,
               modelId: image.id,
               remoteId: saveInCloudinary.public_id,
               remoteUrl: saveInCloudinary.secure_url,
            };
            const result = await model.create(newImage);
            resultImage.unshift(result);
         }
      }
      return resultImage;
   } catch (e) {
      console.error(e.message);
   }
};

export const getImages = async (id: string) => {
   try {
      const result = await model.findOne({ modelId: id }).lean();
      if (result === null) {
         return `The ${id} was not found`;
      } else {
         const newImg: interfaces.IGetImage = {
            _id: result._id,
            localUrl: result.localUrl,
            modelId: result.modelId,
            remoteId: result.remoteId,
            remoteUrl: result.remoteUrl,
         };
         return newImg;
      }
   } catch (e) {
      console.error(e.message);
   }
};

export const updateImage = async (
   file: Express.Multer.File,
   id: string,
   folderName: string
) => {
   try {
      // Validate if model id exists in model
      const findFile = await model.findOne({ modelId: id }).lean();
      if (findFile === null)
         return `The ${id} modelid not found in the database`;

      // Delete file in cloudinary and in the services
      await cloudinary.deleteFile([findFile.remoteId]);
      await files.deleteLocalFile([findFile.localUrl]);

      // Save the new images in cloudinary
      const saveImage = await cloudinary.uploadFile(file.path, folderName);
      if (typeof saveImage === 'undefined') {
         await files.deleteLocalFile(id);
         return 'An error occurred while uploading the image';
      }

      // Create new image object
      const newImage: interfaces.IUpdateMedia = {
         localUrl: file.path,
         remoteUrl: saveImage.secure_url,
         remoteId: saveImage.public_id,
      };

      // Update model
      await model.updateOne({ modelId: id }, { $set: newImage });

      return newImage;
   } catch (e) {
      console.error(e.message);
   }
};
