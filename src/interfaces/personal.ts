import { Types, Document } from 'mongoose';

export interface IAccount extends Document {
   mail: string;
   password: string;
   username: string;
}

export interface ISocialMedia extends Document {
   fullName: string;
   abbreviation: string;
   url: string;
   accountId: Types.ObjectId;
}

export interface IGetAccount {
   _id: string;
   mail: string;
   password: string;
   username: string;
}

export interface IGetSocialMedia {
   _id: string;
   fullName: string;
   abbreviation: string;
   url: string;
}

export interface IPersonal {
   account: IAccount;
   socialMedia: ISocialMedia[];
}

export interface IGetPersonal {
   account: IGetAccount;
   socialMedia?: IGetSocialMedia[];
}
