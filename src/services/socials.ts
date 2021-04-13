import socialModel from '../models/socials';
import config from '../configs/config';
import { deleteLocalFile } from '../utils/files';
import { uploadFile, deleteFile } from '../apis/cloudinary';
import { ICreateSocial, IUpdateSocial } from '../interfaces/socials';

const { cloudinary } = config;

export const createSocial = async (social: ICreateSocial, media: Express.Multer.File) => {
   try {
      let { socialLink, purpose, priority } = social;

      // Business rules
      const findRegister = await socialModel.find({ socialLink }).lean();
      if (findRegister.length !== 0) {
         await deleteLocalFile(media.path);
         return `The url "${socialLink} has already registered`;
      }
      if (purpose.length > 100) {
         await deleteLocalFile(media.path);
         return `Maximum limit for the purpose is 100 characters`;
      }
      const countPriority = await socialModel.find({ priority }).countDocuments().lean();
      if (priority === 1) {
         if (countPriority > 3) {
            await deleteLocalFile(media.path);
            return `The maximum number of records with priority 1 is 3`;
         }
      }

      // Upload files in cloudinary
      const uploadMedia = await uploadFile(media.path, cloudinary.socialFolder);
      if (typeof uploadMedia === 'undefined') {
         await deleteLocalFile(media.path);
         return 'Error when uploading the image to the server. Try again';
      }

      // Create logo object and add social object
      const logo = {
         localUrl: media.path,
         remoteId: uploadMedia.public_id,
         remoteUrl: uploadMedia.secure_url
      };
      const newSocial = { ...social, logo };

      // Save data in database
      const result = await socialModel.create(newSocial);
      return result;
   } catch (e) {
      console.error(e.message);
   }
};

export const getAllSocial = async () => {
   try {
      const findAll = await socialModel.find().lean();
      if (findAll.length === 0) return 'No data found';
      return findAll;
   } catch (e) {
      console.error(e.message);
   }
};

export const deleteSocial = async (id: string) => {
   try {
      // Business Logic
      const findData = await socialModel.findById(id).lean();
      if (!findData) return 'No data found';

      // Delete local and remote media
      await deleteFile([findData.logo.remoteId]);
      await deleteLocalFile(findData.logo.localUrl);

      // Delete data
      const deleted = await socialModel.deleteOne({ _id: id });
      return deleted.deletedCount;
   } catch (e) {
      console.error(e.message);
   }
};

export const updateSocial = async (
   id: string,
   social: IUpdateSocial,
   media: Express.Multer.File
) => {
   try {
      let { socialLink, purpose, priority } = social;
      let logo;

      // Business rules
      const findSocial = await socialModel.findById(id).lean();
      if (!findSocial) {
         if (typeof media !== 'undefined') await deleteLocalFile(media.path);
         return `No data found`;
      }
      const findRegister = await socialModel.find({ socialLink }).lean();
      if (findRegister.length !== 0) {
         if (typeof media !== 'undefined') await deleteLocalFile(media.path);
         return `The url "${socialLink} has already registered`;
      }
      if (purpose.length > 100) {
         if (typeof media !== 'undefined') await deleteLocalFile(media.path);
         return `Maximum limit for the purpose is 100 characters`;
      }
      const countPriority = await socialModel.find({ priority }).countDocuments().lean();
      if (priority === 1) {
         if (countPriority > 3) {
            if (typeof media !== 'undefined') await deleteLocalFile(media.path);
            return `The maximum number of records with priority 1 is 3`;
         }
      }

      if (media) {
         // Upload files in cloudinary
         const uploadMedia = await uploadFile(media.path, cloudinary.socialFolder);
         if (typeof uploadMedia === 'undefined') {
            await deleteLocalFile(media.path);
            return 'Error when uploading the image to the server. Try again';
         }

         // Delete old file
         await deleteLocalFile(media.path);
         await deleteFile([findSocial.logo.remoteId]);

         logo = {
            localUrl: media.path,
            remoteId: uploadMedia.public_id,
            remoteUrl: uploadMedia.secure_url
         };
         social = { ...social, logo };
      }

      // Update data
      const updateSocial = await socialModel.updateOne({ _id: id }, { $set: social });
      return updateSocial.nModified;
   } catch (e) {
      console.error(e.message);
   }
};
