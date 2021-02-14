import { Schema, model } from 'mongoose';
import { IProjectTool } from '../../interfaces/projectTools';

const projectToolSchema: Schema = new Schema(
   {
      projectId: { type: String, required: true, trim: true },
      toolsId: { type: String, required: true },
   },
   {
      collection: 'projectTools',
      timestamps: true,
   }
);

projectToolSchema.index({
   projectId: 1,
   toolsId: 1,
});

export default model<IProjectTool>('projectTools', projectToolSchema);
