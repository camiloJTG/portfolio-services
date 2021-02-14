import { Document, Types } from 'mongoose';

export interface IAccount extends Document {
   mail: string;
   password: string;
   username: string;
}

export interface IGetAccount {
   _id: string;
   mail: string;
   password: string;
   username: string;
}

export interface ICreateAccount {
   _id: Types.ObjectId;
   mail: string;
   password: string;
   username: string;
}
