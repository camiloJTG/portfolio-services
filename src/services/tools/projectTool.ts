import model from "../../models/tools/projectTools";
import * as interfaces from '../../interfaces/projectTools';

export const createProjectTool = async (projectTool: interfaces.ICreateProjectTool) => {
    try {
        for (const pt of projectTool.toolsId) {
            let newPI = {
                projectId: projectTool.projectId.toString(),
                toolsId: pt.toString()
            };
            await model.create(newPI);
        }
    } catch (e) {
        console.error(e.message);
    }
};

export const updateProjectTool = async (projectId: string, projectTool: interfaces.IUpateProjectTool) => {
    try {
        for (const pi of projectTool.toolsId) {
            await model.updateOne({ _id: projectId }, { toolsId: pi });
        }
    } catch (e) {
        console.error(e.message);
    }
};

export const getByProjectId = async (id: string) => {
    try {
        const result = await model.find({ projectId: id }).lean();
        if (result.length === 0)`No data found`;
        return result;
    } catch (e) {
        console.error(e.message);
    }
};

export const getByToolId = async (id: string, limit: number, page: number) => {
    try {
        const result = await model.find({ toolsId: id })
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .sort({ createdAt: -1 })
            .lean();;
        const countData = await model.countDocuments();
        if (result.length === 0) return `No data found`;
        return { result, countData };
    } catch (e) {
        console.error(e.message);
    }
};