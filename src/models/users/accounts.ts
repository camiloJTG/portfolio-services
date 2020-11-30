import { Schema, model, Document, Types } from 'mongoose';

export interface IAccount extends Document {
   mail: string;
   password: string;
   userId: Types.ObjectId;
}

export const toObjectId = (data: string) => {
   const newObjectId = new Types.ObjectId(data);
   return newObjectId;
};

const accountSchema: Schema = new Schema(
   {
      mail: { type: String, required: true, trim: true, unique: true },
      password: { type: String, required: true, trim: true },
      userId: {
         type: Schema.Types.ObjectId,
         ref: 'users',
         required: true,
         unique: true,
      },
   },
   { collection: 'accounts', timestamps: true }
);

accountSchema.index({ mail: 1, userId: 1 });

export default model<IAccount>('accounts', accountSchema);
