import { Schema, model } from 'mongoose';
import { IProjects } from "../../interfaces/projects";

const projectSchema: Schema = new Schema(
   {
      title: { type: String, required: true, trim: true },
      description: { type: String, required: true, trim: true },
      priority: { type: Number, required: true },
      publication: { type: Date, required: true },
      accountId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
   },
   {
      collection: 'projects',
      timestamps: true,
   }
);

projectSchema.index({
   title: 1,
   author: 1,
   publication: 1,
   accountId: 1,
});

export default model<IProjects>('projects', projectSchema);
