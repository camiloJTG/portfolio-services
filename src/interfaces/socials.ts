import { Document } from 'mongoose';

export interface ISocial extends Document {
   name: string;
   purpose: string;
   socialLink: string;
   priority: number;
   logo: {
      remoteUrl: string;
      remoteId: string;
      localUrl: string;
   };
}

export interface ICreateSocial {
   name: string;
   purpose: string;
   socialLink: string;
   priority: number;
   logo: {
      remoteUrl: string;
      remoteId: string;
      localUrl: string;
   };
}

export interface IUpdateSocial {
   name: string;
   purpose: string;
   socialLink: string;
   priority: number;
   logo: {
      remoteUrl: string;
      remoteId: string;
      localUrl: string;
   };
}
