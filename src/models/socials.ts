import { Schema, model } from 'mongoose';
import { ISocial } from '../interfaces/socials';

const socialSchema = new Schema(
   {
      name: { type: String, required: true, trim: true },
      purpose: { type: String, required: true, trim: true, maxlength: 100 },
      priority: { type: Number, required: true },
      socialLink: { type: String, required: true, trim: true, unique: true },
      logo: {
         remoteUrl: String,
         remoteId: String,
         localUrl: String
      }
   },
   { collection: 'socials', timestamps: true }
);

socialSchema.index({
   name: 1,
   priority: 1
});

export default model<ISocial>('socials', socialSchema);
