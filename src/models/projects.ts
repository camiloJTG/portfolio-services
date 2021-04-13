import { Schema, model } from 'mongoose';
import { IProject } from '../interfaces/projects';

const projectSchema = new Schema(
   {
      title: { type: String, required: true, trim: true },
      subtitle: { type: String, required: true, trim: true, maxlength: 100 },
      registrationDate: { type: Date, required: true },
      description: { type: String, required: true, trim: true },
      image: {
         remoteUrl: String,
         remoteId: String,
         localUrl: String
      },
      developments: [{ name: String, urlRepository: String }],
      tools: [
         {
            name: String,
            websiteLink: String,
            priority: Number,
            logo: {
               remoteUrl: String,
               remoteId: String,
               localUrl: String
            }
         }
      ]
   },
   { collection: 'projects', timestamps: true }
);

projectSchema.index({
   title: 1,
   registrationDate: 1,
   'tools.name': 1,
   'tools.priority': 1
});

export default model<IProject>('projects', projectSchema);
