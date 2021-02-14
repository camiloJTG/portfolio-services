import { Document, Types } from 'mongoose';

export interface IImage extends Document {
   remoteUrl: string;
   localUrl: string;
   remoteId: string;
   modelId: string;
}

export interface ICreateImage {
   remoteUrl: string;
   localUrl: string;
   remoteId: string;
   modelId: string;
}

export interface IGetImage {
   _id: Types.ObjectId;
   remoteUrl: string;
   localUrl: string;
   remoteId: string;
   modelId: string;
}

export interface IImageWithId {
   images: Express.Multer.File;
   id: string;
}

export interface IUpdateMedia {
   localUrl: string;
   remoteUrl: string;
   remoteId: string;
}
