import * as accountService from './accounts';
import * as socialService from './socialMedia';
import { ICreatePersonal } from '../../interfaces/personal';

export const createPersonal = async (personal: ICreatePersonal) => {
   try {
      const resultAccount = await accountService.createAccount(personal);
      if (typeof resultAccount === 'string' || typeof resultAccount === 'undefined')
         return resultAccount;

      for (const social of personal.socialMedia) {
         social.accountId = resultAccount._id;
         const resultSocial = await socialService.createSocialMedia(social);
         if (typeof resultSocial === 'string' || typeof resultSocial === 'undefined')
            return resultSocial;
      }
      return personal;
   } catch (e) {
      console.error(e.message);
   }
};

export const getPersonal = async (accountId: string) => {
   try {
      const resultAccount = await accountService.getByAccountId(accountId);
      if (typeof resultAccount === 'string' || typeof resultAccount === 'undefined')
         return resultAccount;

      const resultSocial = await socialService.getByAccountId(accountId);
      if (typeof resultSocial === 'string' || typeof resultSocial === 'undefined')
         return resultSocial;

      const newPersonal = {
         _id: resultAccount._id,
         mail: resultAccount.mail,
         password: resultAccount.password,
         username: resultAccount.username,
         socialMedia: resultSocial
      };
      return newPersonal;
   } catch (e) {
      console.error(e.message);
   }
};