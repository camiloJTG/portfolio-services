import { Schema, model, Document, Types } from 'mongoose';

export interface ISocialMedia extends Document {
   fullName: string;
   abbreviation: string;
   url: string;
   userId: Types.ObjectId;
}

export const toObjectId = (data: string) => {
   const newObjectId = new Types.ObjectId(data);
   return newObjectId;
};

const socialMediaSchema = new Schema(
   {
      fullName: { type: String, required: true, trim: true },
      abbreviation: { type: String, required: true, trim: true, maxlength: 4 },
      url: { type: String, required: true, trim: true, unique: true },
      userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
   },
   { collection: 'socialMedia', timestamps: true }
);

socialMediaSchema.index({ fullName: 1, abbreviation: 1, userId: 1 });

export default model<ISocialMedia>('socialMedia', socialMediaSchema);
