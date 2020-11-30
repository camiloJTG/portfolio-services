import languageModel, * as model from '../../models/users/languages';

export const createLanguage = async (language: model.ILanguage) => {
   try {
      const findFullName = await languageModel
         .find({ fullName: language.fullName })
         .lean();
      if (findFullName.length !== 0)
         return `The full name '${language.fullName}' is already registred`;
      const result = await languageModel.create(language);
      return result;
   } catch (e) {
      console.error(e.message);
   }
};

export const getLanguageByUserId = async (languageUserId: string) => {
   try {
      const userIdO = model.toObjectId(languageUserId);
      if (!userIdO) return 'The userId field is not within the request';
      const findLanguages = await languageModel
         .find({ userId: userIdO })
         .lean();
      if (findLanguages.length === 0)
         return `The userId'${languageUserId}' does not contain registered languages`;
      return findLanguages;
   } catch (e) {
      console.error(e.message);
   }
};

export const deleteLanguage = async (languageId: string, userId: string) => {
   try {
      const userIdO = model.toObjectId(userId);
      const findLanguageAndUser = await languageModel.find({
         _id: languageId,
         userId: userIdO,
      });
      if (findLanguageAndUser.length === 0) return 'No data found';
      const result = await languageModel.deleteOne({ _id: languageId });
      return { 'Deleted data': result.deletedCount };
   } catch (e) {
      console.error(e.message);
   }
};

export const updateLanguage = async (languageId: string, language: model.ILanguage) => {
   try {
      const result = await languageModel
         .updateOne({ _id: languageId }, { $set: language })
         .lean();
      if (!result)
         return `The language id '${languageId}' not found in the database`;
      return { updatedData: true };
   } catch (e) {
      console.error(e.message);
   }
};
