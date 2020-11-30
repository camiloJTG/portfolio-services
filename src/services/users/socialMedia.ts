import socialMediaModel, * as model from '../../models/users/socialMedia';

export const createSocialMedia = async (socialMedia: model.ISocialMedia) => {
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

export const getByUserId = async (userId: string) => {
   try {
      const toObject = model.toObjectId(userId);
      const findSocialsMedia = await socialMediaModel
         .find({ userId: toObject })
         .lean();
      if (findSocialsMedia.length === 0) return `No data found`;
      return findSocialsMedia;
   } catch (e) {
      console.error(e.message);
   }
};

export const getBySocialMediaIdAndUserId = async (
   socialMediaId: string,
   userId: string
) => {
   try {
      const toObject = model.toObjectId(userId);
      const findSocialMedia = await socialMediaModel.findOne({
         _id: socialMediaId,
         userId: toObject,
      });
      if (!findSocialMedia) return `No data found`;
      return findSocialMedia;
   } catch (e) {
      console.error(e.message);
   }
};

export const updateSocialMedia = async (
   socialMediaId: string,
   socialMedia: model.ISocialMedia
) => {
   try {
      const result = await socialMediaModel
         .updateOne({ _id: socialMediaId }, { $set: socialMedia })
         .lean();
      if (!result) return `The ${socialMediaId} not found in the database`;
      return { updatedData: true };
   } catch (e) {
      console.error(e.message);
   }
};

export const deleteSocialMedia = async (socialMediaId: string) => {
   try {
      const findId = await socialMediaModel.findById(socialMediaId).lean();
      if (!findId)
         return `The ${socialMediaId} social media id not found in the database`;
      const result = await socialMediaModel.deleteOne({ _id: socialMediaId });
      return { deletedCount: result.deletedCount };
   } catch (e) {
      console.error(e.message);
   }
};
