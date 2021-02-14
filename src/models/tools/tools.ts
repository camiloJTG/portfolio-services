import { Schema, model } from 'mongoose';
import { ITools } from '../../interfaces/tools';

const toolsSchema: Schema = new Schema(
   {
      name: { type: String, required: true, trim: true, unique: true },
      priority: { type: Number, required: true },
   },
   {
      collection: 'tools',
      timestamps: true,
   }
);

toolsSchema.index({
   name: 1,
   priority: 1,
});

export default model<ITools>('tools', toolsSchema);
