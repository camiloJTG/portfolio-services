import { Document } from 'mongoose';

export interface IAccount extends Document {
   mail: string;
   password: string;
   username: string;
   aboutMe: string;
   jobTitlte: string;
}

export interface ICreateAccount {
   mail: string;
   password: string;
   username: string;
   aboutMe: string;
   jobTitlte: string;
}

export interface IUpdateAccount {
   mail: string;
   password: string;
   username: string;
   aboutMe: string;
   jobTitlte: string;
}

export interface ILogin {
   mail: string;
   password: string;
}
