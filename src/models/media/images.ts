import { Schema, model } from 'mongoose';
import { IImage } from '../../interfaces/images';

const imageSchema: Schema = new Schema(
   {
      remoteUrl: { type: String, required: true, trim: true, unique: true },
      localUrl: { type: String, required: true, trim: true, unique: true },
      remoteId: { type: String, required: true, trim: true, unique: true },
      modelId: { type: String, required: true, unique: true },
   },
   { collection: 'images', timestamps: true }
);

export default model<IImage>('images', imageSchema);
