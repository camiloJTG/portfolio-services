import * as media from '../medias/images';
import * as interfaces from '../../interfaces/socialMedia';
import socialMediaModel from '../../models/personal/socialMedia';

export const createSocialMedia = async (
   socialMedia: interfaces.ICreateSocialMedia
) => {
   try {
      const urlExists = await socialMediaModel.find({ url: socialMedia.url });
      if (urlExists.length !== 0) {
         return `The url ${socialMedia.url} is already registered`;
      }
      const result = await socialMediaModel.create(socialMedia);
      return result;
   } catch (e) {
      console.error(e.message);
   }
};

export const getByAccountId = async (accountId: string) => {
   try {
      let resultData = [];
      // Validate if userId contain data
      const findSocialsMedia = await socialMediaModel
         .find({ accountId: accountId })
         .lean();
      if (findSocialsMedia.length === 0) return `No data found`;

      for (const i of findSocialsMedia) {
         const image = await media.getImages(i._id.toString());
         if (typeof image === 'undefined') return 'Error in get images';
         if (typeof image === 'string') {
            resultData.unshift(image);
         }
         if (typeof image === 'object') {
            let newSocialMedia: interfaces.IGetSocialMedia = {
               _id: i._id,
               priority: i.priority,
               url: i.url,
               fullName: i.fullName,
               images: {
                  _id: image._id,
                  localUrl: image.localUrl,
                  modelId: image.modelId,
                  remoteId: image.remoteId,
                  remoteUrl: image.remoteUrl,
               },
            };
            resultData.unshift(newSocialMedia);
         }
      }
      return resultData;
   } catch (e) {
      console.error(e.message);
   }
};

export const getLastThreeSocialRegistered = async (accountId: string) => {
   try {
      let resultData = [];
      const findSocial = await socialMediaModel
         .find({ accountId: accountId, priority: '1' })
         .limit(3);
      for (const i of findSocial) {
         const image = await media.getImages(i._id);
         if (typeof image === 'undefined') return 'Error in get images';
         if (typeof image === 'string') {
            resultData.unshift(image);
         }
         if (typeof image === 'object') {
            let newSocialMedia: interfaces.IGetSocialMedia = {
               _id: i._id,
               priority: i.priority,
               url: i.url,
               fullName: i.fullName,
               images: {
                  _id: image._id,
                  localUrl: image.localUrl,
                  modelId: image.modelId,
                  remoteId: image.remoteId,
                  remoteUrl: image.remoteUrl,
               },
            };
            resultData.unshift(newSocialMedia);
         }
      }
      return resultData;
   } catch (e) {
      console.error(e.message);
   }
};

export const getAllSocialMedia = async (accountId: string) => {
   try {
      let resultData = [];
      const findSocial = await socialMediaModel.find({ accountId: accountId });
      if (findSocial.length === 0) return 'No data found';
      for (const i of findSocial) {
         const image = await media.getImages(i._id);
         if (typeof image === 'undefined') return 'Error in get images';
         if (typeof image === 'string') {
            resultData.unshift(image);
         }
         if (typeof image === 'object') {
            let newSocialMedia: interfaces.IGetSocialMedia = {
               _id: i._id,
               priority: i.priority,
               url: i.url,
               fullName: i.fullName,
               images: {
                  _id: image._id,
                  localUrl: image.localUrl,
                  modelId: image.modelId,
                  remoteId: image.remoteId,
                  remoteUrl: image.remoteUrl,
               },
            };
            resultData.unshift(newSocialMedia);
         }
      }
      return resultData;
   } catch (e) {
      console.error(e.message);
   }
};
