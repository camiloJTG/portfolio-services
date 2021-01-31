import accountModel from '../../models/personal/accounts';
import { IAccount, ICreateAccount } from '../../interfaces/accounts';
import { encrypt } from '../../utils/bcrypt';

export const createAccount = async (account: ICreateAccount) => {
   try {
      // Validate if email or username is already registered
      const findEmail = await accountModel.find({ mail: account.mail }).lean();
      if (findEmail.length !== 0)
         return `The email ${account.mail} is already registered`;
      const findUsername = await accountModel
         .find({ username: account.username })
         .lean();
      if (findUsername.length !== 0)
         return `The username ${account.username} is already registered`;

      // Encrypt entered password
      const hashPassword = await encrypt(account.password);
      if (!hashPassword) throw new Error('Error in generate encrypted');
      account.password = hashPassword;
      const result = await accountModel.create(account);
      return result;
   } catch (e) {
      console.error(e.message);
   }
};

export const getByAccountId = async (accountId: string) => {
   try {
      // Validate if account id exists
      const accountIdExists = await accountModel.findById(accountId).lean();
      if (!accountIdExists)
         return `The account id ${accountId} not found in the database`;

      // Return result
      return accountIdExists;
   } catch (e) {
      console.error(e.message);
   }
};

export const updateAccount = async (accountId: string, account: IAccount) => {
   try {
      const findAccount = await accountModel.findById(accountId);
      if (!findAccount) return `The id ${accountId} not found in the database`;
      if (account.mail) {
         const findMail = await accountModel
            .find({ mail: account.mail })
            .lean();
         if (findMail.length !== 0)
            return `The email ${account.mail} is already registered`;
      }
      if (account.password) {
         const hashPassword = await encrypt(account.password);
         if (!hashPassword) throw new Error('Error in generate encrypted');
         account.password = hashPassword;
      }
      await accountModel.updateOne({ _id: accountId }, { $set: account });
      return { updatedData: true };
   } catch (e) {
      console.error(e.message);
   }
};
