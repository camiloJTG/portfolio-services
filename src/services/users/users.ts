import userModel, { IUser } from '../../models/users/users';

export const createUser = async (user: IUser) => {
   try {
      const phoneExists = await userModel
         .find({ phoneNumber: user.phoneNumber })
         .lean();
      if (phoneExists.length !== 0)
         return `The phone number '${user.phoneNumber}' is already registred`;
      const result = userModel.create(user);
      return result;
   } catch (e) {
      console.error(e.message);
   }
};

export const getUserById = async (id: string) => {
   try {
      const getUser = await userModel.findById(id).lean();
      if (!getUser) return `The user id '${id}' not found in the database`;
      return getUser;
   } catch (e) {
      console.error(e.message);
   }
};

export const updateUser = async (id: string, data: IUser) => {
   try {
      const updateUser = await userModel
         .updateOne({ _id: id }, { $set: data })
         .lean();
      if (!updateUser) {
         return `The user id '${id}' not found in the database`;
      }
      return { updatedData: true };
   } catch (e) {
      console.error(e.message);
   }
};
