import { Schema, model, Document, Types } from 'mongoose';

export interface ILanguage extends Document {
   fullName: string;
   abbreviation: string;
   domainLevel: string;
   userId: Types.ObjectId;
}

export const toObjectId = (data: string) => {
   const newObjectId = new Types.ObjectId(data);
   return newObjectId;
};

const languageSchema: Schema = new Schema(
   {
      fullName: { type: String, required: true, trim: true, unique: true },
      abbreviation: { type: String, required: true, trim: true, maxlength: 4 },
      domainLevel: { type: String, required: true, trim: true },
      userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
   },
   { collection: 'language', timestamps: true }
);

languageSchema.index({
   fullName: 1,
   abbreviation: 1,
   domainLevel: 1,
   userId: 1,
});

export default model<ILanguage>('languages', languageSchema);
