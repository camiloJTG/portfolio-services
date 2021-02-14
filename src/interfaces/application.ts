import { Document, Types } from 'mongoose';

export interface IApplication extends Document {
   name: string;
   abbreviation: string;
   urlApp: string;
   description: string;
   projectId: Types.ObjectId;
}

export interface ICreateApplication {
   _id: string;
   name: string;
   abbreviation: string;
   urlApp: string;
   description: string;
   projectId: Types.ObjectId;
}

export interface IUpateApplication {
   _id: string;
   name: string;
   abbreviation: string;
   urlApp: string;
   description: string;
}

export interface IGetApplications {
   _id: string;
   name: string;
   abbreviation: string;
   urlApp: string;
   description: string;
}
