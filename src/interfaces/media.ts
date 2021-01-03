import { Document } from 'mongoose';

export interface IMedia {
    remoteUrl: string,
    localUrl: string,
    remoteId: string,
    modelId: string;
}

export interface IUpdateMedia {
    remoteUrl: string,
    localUrl: string,
    remoteId: string;
}

export interface IMediaExtends extends Document {
    remoteUrl: string,
    localUrl: string,
    remoteId: string,
    modelId: string;
}