import { Schema, model } from 'mongoose';
import { IAccount } from '../interfaces/accounts';

const accountSchema = new Schema(
   {
      mail: { type: String, required: true, trim: true, unique: true },
      password: { type: String, required: true, trim: true },
      username: { type: String, required: true, trim: true, unique: true },
      aboutMe: { type: String, required: true, trim: true },
      jobTitle: { type: String, required: true, trim: true }
   },
   { collection: 'accounts', timestamps: true }
);

accountSchema.index({
   mail: 1,
   username: 1,
   jobTitle: 1
});

export default model<IAccount>('accounts', accountSchema);
