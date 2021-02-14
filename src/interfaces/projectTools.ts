import { Document } from 'mongoose';

export interface IProjectTool extends Document {
   projectId: string;
   toolsId: string;
}

export interface ICreateProjectTool {
   projectId: string;
   toolsId: string[];
}

export interface IUpateProjectTool {
   toolsId: string[];
}
