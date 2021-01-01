import * as accountService from './accounts';
import * as socialService from './socialMedia';
import accountModel from '../../models/personal/accounts';
import socialMedia from '../../models/personal/socialMedia';
import { IPersonal, IGetPersonal } from '../../interfaces/personal';

export const createPersonal = async (personal: IPersonal) => {
   try {
      // Business rule validation
      const resultAccount = await accountService.createAccount(
         personal.account
      );
      if (
         typeof resultAccount === 'string' ||
         typeof resultAccount === 'undefined'
      )
         return resultAccount;
      const resultSocial = await socialService.createSocialMedia(
         personal.socialMedia
      );
      if (
         typeof resultSocial === 'string' ||
         typeof resultSocial === 'undefined'
      )
         return resultSocial;

      // Store information in account and social media model
      const createAccount = await accountModel.create(resultAccount);
      for (const social of resultSocial) {
         social.accountId = createAccount._id;
         await socialMedia.create(social);
      }

      // Return object
      const result: IPersonal = {
         account: personal.account,
         socialMedia: personal.socialMedia,
      };
      return result;
   } catch (e) {
      console.error(e.message);
   }
};

export const getPersonal = async (accountId: string) => {
   try {
      // Business rule validation
      const resultAccount = await accountService.getByAccountId(accountId);
      if (
         typeof resultAccount === 'string' ||
         typeof resultAccount === 'undefined'
      )
         return resultAccount;
      const resultSocial = await socialService.getByAccountId(accountId);
      if (
         typeof resultSocial === 'string' ||
         typeof resultSocial === 'undefined'
      )
         return resultSocial;

      // Return data
      const result: IGetPersonal = {
         account: resultAccount,
         socialMedia: resultSocial,
      };
      return result;
   } catch (e) {
      console.error(e.message);
   }
};

export const updatePersonal = async (
   accountId: string,
   personal: IPersonal
) => {
   try {
      let resultAccount: boolean | undefined | string | {};
      let resultSocial: boolean | undefined | string | {};

      if (
         typeof personal.account === 'undefined' &&
         typeof personal.socialMedia !== 'undefined'
      ) {
         resultSocial = await socialService.updateSocialMedia(
            accountId,
            personal.socialMedia
         );
         if (
            typeof resultSocial === 'string' ||
            typeof resultSocial === 'undefined'
         )
            return resultSocial;
      }
      if (
         typeof personal.account !== 'undefined' &&
         typeof personal.socialMedia === 'undefined'
      ) {
         resultAccount = await accountService.updateAccount(
            accountId,
            personal.account
         );
         if (
            typeof resultAccount === 'string' ||
            typeof resultAccount === 'undefined'
         )
            return resultAccount;
      }
      if (
         typeof personal.account !== 'undefined' &&
         typeof personal.socialMedia !== 'undefined'
      ) {
         resultAccount = await accountService.updateAccount(
            accountId,
            personal.account
         );
         if (
            typeof resultAccount === 'string' ||
            typeof resultAccount === 'undefined'
         )
            return resultAccount;
         resultSocial = await socialService.updateSocialMedia(
            accountId,
            personal.socialMedia
         );
         if (
            typeof resultSocial === 'string' ||
            typeof resultSocial === 'undefined'
         )
            return resultSocial;
      }

      // Return result
      const result = {
         account: resultAccount,
         socialMedia: resultSocial,
      };
      return result;
   } catch (e) {
      console.error(e.message);
   }
};
