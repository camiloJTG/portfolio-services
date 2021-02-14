import { Schema, model } from 'mongoose';
import { IApplication } from '../../interfaces/application';

const applicationSchema: Schema = new Schema(
   {
      name: { type: String, required: true, trim: true },
      abbreviation: { type: String, required: true, trim: true },
      urlApp: { type: String, required: true, trim: true },
      description: { type: String, required: true },
      projectId: {
         type: Schema.Types.ObjectId,
         ref: 'projects',
         required: true,
      },
   },
   {
      collection: 'applications',
      timestamps: true,
   }
);

applicationSchema.index({
   name: 1,
   abbreviation: 1,
   description: 1,
   projectId: 1,
});

export default model<IApplication>('applications', applicationSchema);
