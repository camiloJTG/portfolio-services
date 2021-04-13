import { Document } from 'mongoose';

export interface IProject extends Document {
   title: string;
   subtitle: string;
   registrationDate: Date;
   description: string;
   image: {
      remoteUrl: string;
      remoteId: string;
      localUrl: string;
   };
   developments: [
      {
         name: string;
         urlRepository: string;
      }
   ];
   tools: [
      {
         name: string;
         websiteLink: string;
         priority: number;
         logo: {
            remoteUrl: string;
            remoteId: string;
            localUrl: string;
         };
      }
   ];
}

export interface ICreateProject {
   title: string;
   subtitle: string;
   registrationDate: Date;
   description: string;
   image: {
      remoteUrl: string;
      remoteId: string;
      localUrl: string;
   };
   developments: [
      {
         name: string;
         urlRepository: string;
      }
   ];
   tools: [
      {
         name: string;
         websiteLink: string;
         priority: number;
         logo: {
            remoteUrl: string;
            remoteId: string;
            localUrl: string;
         };
      }
   ];
}

export interface IUpdateProject {
   title: string;
   subtitle: string;
   registrationDate: Date;
   description: string;
   image: {
      remoteUrl: string;
      remoteId: string;
      localUrl: string;
   };
   developments: [
      {
         name: string;
         urlRepository: string;
      }
   ];
   tools: [
      {
         name: string;
         websiteLink: string;
         priority: number;
         logo: {
            remoteUrl: string;
            remoteId: string;
            localUrl: string;
         };
      }
   ];
}

export interface ITools {
   name: string;
   websiteLink: string;
   priority: number;
   logo: {
      remoteUrl: string;
      remoteId: string;
      localUrl: string;
   };
}
