import imageModel from '../../models/media/images';
import { IMedia, IUpdateMedia } from "../../interfaces/media";
import { uploadFile, deleteFile } from "../../apis/cloudinary";
import { deleteLocalFile } from '../../utils/files';

export const createImage = async (
    files: Express.Multer.File[],
    folderName: string,
    modelId: string[]
) => {
    try {
        let listImage = [];

        // Get all path 
        let localUrl: string[] = [];
        files.map(x => localUrl.unshift(x.path));

        for (const [i, file] of files.entries()) {
            const findModelId = await imageModel.findOne({ modelId: modelId[i] });
            if (findModelId !== null) {
                await deleteLocalFile(localUrl[i]);
                listImage.unshift({ message: `The ${modelId[i]} already has a previous registration` });
            } else {
                // Save images in cloudinary
                const saveImage = await uploadFile(file.path, folderName);
                if (typeof saveImage === 'undefined') {
                    await deleteLocalFile(localUrl);
                    return 'An error occurred while uploading the image';
                }
                // Create image object
                const newImage: IMedia = {
                    localUrl: file.path,
                    remoteUrl: saveImage.secure_url,
                    remoteId: saveImage.public_id,
                    modelId: modelId[i]
                };

                // Save in image model
                const result = await imageModel.create(newImage);
                listImage.unshift(result);
            }
        }
        return listImage;
    } catch (e) {
        console.error(e.message);
    }
};

export const getImages = async (modelIds: string[]) => {
    try {
        const listImages = [];
        for (const model of modelIds) {
            const result = await imageModel.findOne({ modelId: model }).lean();
            if (result === null) {
                listImages.unshift({ message: `The ${model} id not found in the database` });
            } else {
                listImages.unshift(result);
            }
        }
        return listImages;
    } catch (e) {
        console.error(e.message);
    }
};

export const updateImage = async (file: Express.Multer.File, id: string, folderName: string) => {
    try {
        // Validate if model id exists in model
        const findFile = await imageModel.findOne({ modelId: id }).lean();
        if (findFile === null) return `The ${id} modelid not found in the database`;

        // Delete file in cloudinary and in the services
        await deleteFile([findFile.remoteId]);
        await deleteLocalFile([findFile.localUrl]);

        // Save the new images in cloudinary
        const saveImage = await uploadFile(file.path, folderName);
        if (typeof saveImage === 'undefined') {
            await deleteLocalFile(id);
            return 'An error occurred while uploading the image';
        }

        // Create new image object
        const newImage: IUpdateMedia = {
            localUrl: file.path,
            remoteUrl: saveImage.secure_url,
            remoteId: saveImage.public_id
        };

        // Update model
        await imageModel.updateOne({ modelId: id }, { $set: newImage });

        return newImage;
    } catch (e) {
        console.error(e.message);
    }
};