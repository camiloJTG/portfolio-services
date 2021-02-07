import model from "../../models/tools/tools";
import * as service from '../medias/images';
import * as interfaces from '../../interfaces/tools';

export const createTool = async (tool: interfaces.ICreateTool) => {
    try {
        const findTools = await model.findOne({ name: tool.name });
        if (findTools !== null) return `The ${tool.name} has already registered`;
        const result = await model.create(tool);
        return result;
    } catch (e) {
        console.error(e.message);
    }
};

export const updateTool = async (idTool: string, tool: interfaces.ICreateTool) => {
    try {
        const findTool = await model.findById(idTool);
        if (findTool === null) return `The ${idTool} not found in the database`;
        const findByName = await model.findOne({ name: tool.name });
        if (findByName !== null) return `The ${tool.name} has already registered`;
        await model.updateOne({ _id: idTool }, { $set: tool });
        return { updatedData: true };
    } catch (e) {
        console.error(e.message);
    }
};

export const getOneTool = async (idTool: string) => {
    try {
        const findTool = await model.findById(idTool).lean();
        if (findTool === null) return `No data found`;
        const getImage = await service.getImages(findTool._id);
        if (typeof getImage === 'undefined') return 'Error in getimages';
        if (typeof getImage === 'string') return getImage;
        const newTool: interfaces.IGetTool = {
            _id: findTool._id,
            name: findTool.name,
            priotiry: findTool.priority,
            image: getImage
        };
        return newTool;
    } catch (e) {
        console.error(e.message);
    }
};

export const getAllTool = async () => {
    try {
        let allTools = [];
        const findTool = await model.find().lean();
        if (findTool.length === 0) return `No data found`;
        for (const tool of findTool) {
            const getImage = await service.getImages(tool._id);
            if (typeof getImage === 'undefined') allTools.unshift({ message: 'Error in getimage' });
            if (typeof getImage === 'string') allTools.unshift(getImage);
            if (typeof getImage === 'object') {
                const newTool: interfaces.IGetTool = {
                    _id: tool._id,
                    name: tool.name,
                    priotiry: tool.priority,
                    image: getImage
                };
                allTools.unshift(newTool);
            }
        }
        return allTools;
    } catch (e) {
        console.error(e.message);
    }
};