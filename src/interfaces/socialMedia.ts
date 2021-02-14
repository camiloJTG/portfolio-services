import { Types, Document } from 'mongoose';
import { IGetImage } from './images';

export interface ISocialMedia extends Document {
   fullName: string;
   priority: string;
   url: string;
   accountId: Types.ObjectId;
}

export interface IGetSocialMedia {
   _id: string;
   fullName: string;
   priority: string;
   url: string;
   images: {
      _id: IGetImage['_id'];
      localUrl: IGetImage['localUrl'];
      remoteUrl: IGetImage['remoteUrl'];
      remoteId: IGetImage['remoteId'];
      modelId: IGetImage['modelId'];
   };
}

export interface ICreateSocialMedia {
   _id: Types.ObjectId;
   fullName: string;
   priority: string;
   url: string;
   accountId: Types.ObjectId;
}
