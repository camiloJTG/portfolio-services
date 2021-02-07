import { Document } from 'mongoose';
import { IGetImage } from "./images";

export interface ITools extends Document {
    name: string;
    priority: number;
}

export interface ICreateTool {
    name: string;
    priority: number;
}

export interface IGetTool {
    _id: string;
    name: string;
    priotiry: number;
    image: {
        _id: IGetImage["_id"];
        localUrl: IGetImage["localUrl"];
        modelId: IGetImage["modelId"];
        remoteId: IGetImage["remoteId"];
        remoteUrl: IGetImage["remoteUrl"];
    };
}