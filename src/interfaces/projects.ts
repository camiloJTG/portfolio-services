import { Document, Types } from "mongoose";
import * as IApplication from './application';
import * as IProjectTool from './projectTools';
import * as IMedias from './images';

export interface IProjects extends Document {
    title: string;
    description: string;
    priority: number;
    publication: Date;
    accountId: Types.ObjectId;
}

export interface ICreateProject {
    title: string;
    description: string;
    priority: number;
    publication: Date;
    accountId: Types.ObjectId;
    applications: [IApplication.ICreateApplication];
    projectTool: IProjectTool.ICreateProjectTool;
}

export interface IUpateProject {
    title: string;
    description: string;
    priority: number;
    publication: Date;
    applications: [IApplication.IUpateApplication];
    projectTool: IProjectTool.IUpateProjectTool;
}

export interface IGetOneProject {
    _id: string;
    title: string;
    description: string;
    priority: number;
    publication: Date;
    image: any;
    accountId: Types.ObjectId;
    applications: any;
    projectTool: any;
}

export interface IGetPorjectByTool {
    projects: any;
    images: any;
    applications: any;
}