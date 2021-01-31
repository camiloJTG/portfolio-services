import accountModel from '../../models/personal/accounts';
import { ILogin } from '../../interfaces/access';
import { validateHash } from '../../utils/bcrypt';
import { createToken } from '../../utils/jwt';

export const login = async (login: ILogin) => {
   try {
      // Validate if mail is correct
      const findMail = await accountModel
         .findOne({ mail: login.mail })
         .lean();
      if (!findMail) return `Invalid credentials`;

      // Validate if password is correct
      const comparePassword = await validateHash(
         login.password,
         findMail.password
      );
      if (!comparePassword) return 'Invalid credentials';

      // Generate token with data personal
      const { mail, username, _id } = findMail;
      const newToken = { mail, username, _id };
      const token = createToken(newToken);

      return token;
   } catch (e) {
      console.error(e.message);
   }
};
