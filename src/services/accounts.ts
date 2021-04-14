import accountModel from '../models/accounts';
import { ICreateAccount, IUpdateAccount, ILogin } from '../interfaces/accounts';
import { encrypt, validateHash } from '../utils/bcrypt';
import { createToken } from '../utils/jwt';

export const createAccount = async (account: ICreateAccount) => {
   try {
      const { mail, username } = account;

      // Business rules
      const findMail = await accountModel.find({ mail }).lean();
      if (findMail.length !== 0) return `The mail '${mail}' has already registered`;
      const findUsername = await accountModel.find({ username }).lean();
      if (findUsername.length !== 0) return `The username '${username}' has already registered`;

      // Encrypt password
      const hashPassword = await encrypt(account.password);
      if (!hashPassword) return `Error in encrypt password`;
      account.password = hashPassword;

      // Save data in database
      const saveData = await accountModel.create(account);
      return saveData;
   } catch (e) {
      console.error(e.message);
   }
};

export const getAccount = async () => {
   try {
      const findAccount = await accountModel.find();
      if (findAccount.length === 0) return `No data found`;
      const { username, aboutMe, jobTitle } = findAccount[0];
      const newData = { username, aboutMe, jobTitle };
      return newData;
   } catch (e) {
      console.error(e.message);
   }
};

export const updateAccount = async (id: string, account: IUpdateAccount) => {
   try {
      const { mail, username } = account;

      // Business logic
      const findData = await accountModel.findById(id).lean();
      if (!findData) return `No data found`;
      const findMail = await accountModel.find({ mail }).lean();
      if (findMail.length !== 0) return `The mail '${mail}' has already registered`;
      const findUsername = await accountModel.find({ username }).lean();
      if (findUsername.length !== 0) return `The username '${username}' has already registered`;

      // Update password
      if (account.password) {
         const hashPassword = await encrypt(account.password);
         if (!hashPassword) return `Error in encrypt password`;
         account.password = hashPassword;
      }

      // Update data
      const updateData = await accountModel.updateOne({ _id: id }, { $set: account });
      return updateData.nModified;
   } catch (e) {
      console.error(e.message);
   }
};

export const login = async (login: ILogin) => {
   try {
      const { mail, password } = login;

      // Business logic
      const findData = await accountModel.find({ mail }).lean();
      if (findData.length === 0) return `Invalid credentials`;
      const comparePassword = await validateHash(password, findData[0].password);
      if (!comparePassword) return `Invalid credentials`;

      // Generate token
      const { username, _id } = findData[0];
      const newToken = { mail, username, _id };
      const token = createToken(newToken);
      return token;
   } catch (e) {
      console.error(e.message);
   }
};
