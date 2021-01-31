import { Schema, model } from 'mongoose';
import { IAccount } from '../../interfaces/accounts';

const accountSchema: Schema = new Schema(
   {
      mail: { type: String, required: true, trim: true, unique: true },
      password: { type: String, required: true, trim: true },
      username: { type: String, required: true, trim: true },
   },
   { collection: 'accounts', timestamps: true }
);

export default model<IAccount>('accounts', accountSchema);
