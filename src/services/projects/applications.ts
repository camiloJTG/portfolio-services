import model from '../../models/projects/applications';
import * as interfaces from '../../interfaces/application';

export const createApplication = async (app: interfaces.ICreateApplication) => {
   try {
      const newApp = await model.create(app);
      return newApp;
   } catch (e) {
      console.error(e.message);
   }
};

export const updateApplication = async (
   id: string,
   app: interfaces.IUpateApplication
) => {
   try {
      const findApp = await model.findById(id);
      if (findApp === null) return `The ${id} id not found in the database`;
      model.updateOne({ _id: id }, { $set: app });
      return { updateData: true };
   } catch (e) {
      console.error(e.message);
   }
};

export const getOneApplication = async (id: string) => {
   try {
      const findId = await model.find({ projectId: id });
      if (findId.length === null) return `No data found`;
      return findId;
   } catch (e) {
      console.error(e.message);
   }
};

export const getAllApplication = async () => {
   try {
      const result = await model.find();
      if (result.length === 0) return `No data found`;
      return result;
   } catch (e) {
      console.error(e.message);
   }
};
