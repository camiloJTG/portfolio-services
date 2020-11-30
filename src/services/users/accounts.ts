import accountModel, * as models from '../../models/users/accounts';
import { createToken } from '../../utils/jwt';
import { encrypt, validateHash } from '../../utils/bcrypt';

export const createAccount = async (account: models.IAccount) => {
   try {
      const findEmail = await accountModel.find({ mail: account.mail }).lean();
      if (findEmail.length !== 0)
         return `The email ${account.mail} is already registered`;
      const findUser = await accountModel
         .find({ userId: account.userId })
         .lean();
      if (findUser.length !== 0)
         return `The user id ${account.userId} already contains an account`;
      const hashPassword = await encrypt(account.password);
      if (!hashPassword) throw new Error('Error in generate encrypted');
      account.password = hashPassword;
      const result = await accountModel.create(account);
      return result;
   } catch (e) {
      console.error(e.message);
   }
};

export const getByUserId = async (userId: string) => {
   try {
      const toObject = models.toObjectId(userId);
      const findUserId = await accountModel
         .findOne({ userId: toObject })
         .lean();
      if (!findUserId) return `The user id ${userId} not found in the database`;
      return findUserId;
   } catch (e) {
      console.error(e);
   }
};

export const updateAccount = async (
   accountId: string,
   account: models.IAccount
) => {
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
      const result = await accountModel.updateOne(
         { _id: accountId },
         { $set: account }
      );
      return { updatedData: true };
   } catch (e) {
      console.error(e.message);
   }
};

export const login = async (account: models.IAccount) => {
   try {
      const findMail = await accountModel.findOne({ mail: account.mail }).lean();
      if (!findMail) return `Invalid credentials`;
      const comparePassword = await validateHash(account.password, findMail.password);
      if (!comparePassword) return 'Invalid credentials';
      const { mail, userId } = findMail;
      const newToken = { mail, userId };
      const token = createToken(newToken);
      return token;
   } catch (e) {
      console.error(e.message);
   }
};
