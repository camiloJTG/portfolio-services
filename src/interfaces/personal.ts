import { ICreateAccount } from './accounts';
import { ICreateSocialMedia } from './socialMedia';
export interface ICreatePersonal {
   _id: ICreateAccount['_id'];
   mail: ICreateAccount['mail'];
   password: ICreateAccount['password'];
   username: ICreateAccount['username'];
   socialMedia: [
      {
         _id: ICreateSocialMedia['_id'];
         fullName: ICreateSocialMedia['fullName'];
         priority: ICreateSocialMedia['priority'];
         url: ICreateSocialMedia['url'];
         accountId: ICreateSocialMedia['accountId'];
      }
   ];
}
