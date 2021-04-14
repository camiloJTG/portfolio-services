import { Document } from 'mongoose';

export interface IAccount extends Document {
   mail: string;
   password: string;
   username: string;
   aboutMe: string;
   jobTitle: string;
}

export interface ICreateAccount {
   mail: string;
   password: string;
   username: string;
   aboutMe: string;
   jobTitle: string;
}

export interface IUpdateAccount {
   mail: string;
   password: string;
   username: string;
   aboutMe: string;
   jobTitle: string;
}

export interface ILogin {
   mail: string;
   password: string;
}
