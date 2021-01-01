import socialMediaModel from '../../models/personal/socialMedia';
import { ISocialMedia } from '../../interfaces/personal';

export const createSocialMedia = async (socialMedia: ISocialMedia[]) => {
   try {
      // Bucle for validate input in social media
      for (const social of socialMedia) {
         const urlExists = await socialMediaModel.find({ url: social.url });
         if (urlExists.length !== 0) {
            return `The url ${social.url} is already registered`;
         }
      }

      // Return object
      return socialMedia;
   } catch (e) {
      console.error(e.message);
   }
};

export const getByAccountId = async (accountId: string) => {
   try {
      // Validate if userId contain data
      const findSocialsMedia = await socialMediaModel
         .find({ accountId: accountId })
         .lean();
      if (findSocialsMedia.length === 0) return `No data found`;

      // Return result
      return findSocialsMedia;
   } catch (e) {
      console.error(e.message);
   }
};

export const updateSocialMedia = async (
   accountId: string,
   socialMedia: ISocialMedia[]
) => {
   try {
      for (const social of socialMedia) {
         const urlExists = await socialMediaModel.find({ url: social.url });
         if (urlExists.length !== 0) {
            return `The url ${social.url} is already registered`;
         }
         await socialMediaModel
            .updateOne({ accountId: accountId }, { $set: social })
            .lean();
      }
      return { updatedData: true };
   } catch (e) {
      console.error(e.message);
   }
};
