import { v2 } from 'cloudinary';
import configs from '../configs/config';

const { config, uploader, api } = v2;

config({
   cloud_name: configs.cloudinary.apiName,
   api_key: configs.cloudinary.apiKey,
   api_secret: configs.cloudinary.apiSecret,
   secure: configs.cloudinary.apiSecure,
});

export const uploadFile = async (file: string, folderName: string) => {
   try {
      const result = await uploader.upload(file, {
         folder: `Porfolio/${folderName}`,
      });
      return result;
   } catch (e) {
      console.error(e.message);
   }
};

export const deleteFile = async (publicId: string[]) => {
   try {
      const result = await api.delete_resources(publicId);
      return result;
   } catch (e) {
      console.error(e.message);
   }
};
