import model from '../../models/projects/projects';
import * as appService from './applications';
import * as pi from '../tools/projectTool';
import * as toolService from '../tools/tools';
import * as imageService from '../medias/images';
import * as interfaces from '../../interfaces/projects';

export const createProject = async (project: interfaces.ICreateProject) => {
    try {
        let newProject = {
            title: project.title,
            description: project.description,
            priority: project.priority,
            publication: project.publication,
            accountId: project.accountId
        };
        const saveProject = await model.create(newProject);
        for (const app of project.applications) {
            app.projectId = saveProject._id;
            await appService.createApplication(app);
        }
        project.projectTool.projectId = saveProject._id;
        await pi.createProjectTool(project.projectTool);

        return project;
    } catch (e) {
        console.error(e.message);
    }
};

export const updateProject = async (projectId: string, project: interfaces.IUpateProject) => {
    try {
        const findProject = await model.findById(projectId).lean();
        if (findProject === null) return `The ${projectId} id not found in the database`;
        const indo = await model.updateOne({ _id: projectId }, { $set: project });
        if (project.applications) {
            for (const app of project.applications) {
                await appService.updateApplication(app._id, app);
            }
        }
        if (project.projectTool) {
            await pi.updateProjectTool(findProject._id, project.projectTool);
        }
        return { updatedData: true };
    } catch (e) {
        console.error(e.message);
    }
};

export const getLastRegisteredProject = async () => {
    try {
        let tools = [];
        const findProject = await model.find().sort({ createdAt: -1 }).lean().limit(1);
        const findImage = await imageService.getImages(findProject[0]._id);
        const findApp = await appService.getOneApplication(findProject[0]._id);
        const findPI = await pi.getByProjectId(findProject[0]._id);
        if (typeof findPI === 'object') {
            for (const tool of findPI) {
                const findTool = await toolService.getOneTool(tool.toolsId);
                tools.unshift(findTool);
            }
        }
        if (typeof findImage === 'object') {
            const newProject: interfaces.IGetOneProject = {
                _id: findProject[0]._id,
                title: findProject[0].title,
                description: findProject[0].description,
                priority: findProject[0].priority,
                publication: findProject[0].publication,
                accountId: findProject[0].accountId,
                image: findImage,
                applications: findApp,
                projectTool: tools
            };
            return newProject;
        }
        return [];
    } catch (e) {
        console.error(e);
    }
};

export const getLastSixRegisteredProject = async () => {
    try {
        let findProjects = [];
        const findProject = await model.find().sort({ createdAt: -1 }).limit(6);
        for (const p of findProject) {
            let tools = [];
            const findImage = await imageService.getImages(p._id);
            const findApp = await appService.getOneApplication(p._id);
            const findPI = await pi.getByProjectId(p._id);
            if (typeof findPI === 'object') {
                for (const t of findPI) {
                    const findTool = await toolService.getOneTool(t.toolsId);
                    tools.unshift(findTool);
                }
            }
            let newProject: interfaces.IGetOneProject = {
                _id: findProject[0]._id,
                title: findProject[0].title,
                description: findProject[0].description,
                priority: findProject[0].priority,
                publication: findProject[0].publication,
                accountId: findProject[0].accountId,
                image: findImage,
                applications: findApp,
                projectTool: tools
            };
            findProjects.unshift(newProject);
        }
        return findProjects;
    } catch (e) {
        console.error(e);
    }
};

export const getByProjectId = async (projectId: string) => {
    try {
        let tools = [];
        const findProject = await model.find({ _id: projectId }).sort({ createdAt: -1 }).lean().limit(1);

        const findImage = await imageService.getImages(findProject[0]._id);
        const findApp = await appService.getOneApplication(findProject[0]._id);
        const findPI = await pi.getByProjectId(findProject[0]._id);
        if (typeof findPI === 'object') {
            for (const tool of findPI) {
                const findTool = await toolService.getOneTool(tool.toolsId);
                tools.unshift(findTool);
            }
        }
        if (typeof findImage === 'object') {
            const newProject: interfaces.IGetOneProject = {
                _id: findProject[0]._id,
                title: findProject[0].title,
                description: findProject[0].description,
                priority: findProject[0].priority,
                publication: findProject[0].publication,
                accountId: findProject[0].accountId,
                image: findImage,
                applications: findApp,
                projectTool: tools
            };
            return newProject;
        }

        return [];
    } catch (e) {
        console.error(e.message);
    }
};

export const getAllProject = async (page: number = 1, limit: number = 10) => {
    try {
        let findProjects = [];
        const getAll = await model.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .sort({ createdAt: -1 })
            .lean();
        const count = await model.countDocuments();
        for (const p of getAll) {
            let tools = [];
            const findImage = await imageService.getImages(p._id);
            const findApp = await appService.getOneApplication(p._id);
            const findPI = await pi.getByProjectId(p._id);
            if (typeof findPI === 'object') {
                for (const t of findPI) {
                    const findTool = await toolService.getOneTool(t.toolsId);
                    tools.unshift(findTool);
                }
            }
            let newProject: interfaces.IGetOneProject = {
                _id: getAll[0]._id,
                title: getAll[0].title,
                description: getAll[0].description,
                priority: getAll[0].priority,
                publication: getAll[0].publication,
                accountId: getAll[0].accountId,
                image: findImage,
                applications: findApp,
                projectTool: tools
            };
            findProjects.unshift(newProject);
        }
        const newData = {
            findProjects,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        };
        return newData;
    } catch (e) {
        console.error(e.message);
    }
};

export const getProjectByToolId = async (toolId: string, page: number = 1, limit: number = 10) => {
    try {
        let result = [];
        let newData = {};
        let count: number = 0;
        const findPI = await pi.getByToolId(toolId, limit, page);
        if (typeof findPI === 'object') {
            count = findPI.countData;
            for (const i of findPI.result) {
                const findProject = await model.find({ _id: i.projectId }).lean();
                const findImage = await imageService.getImages(i.projectId);
                const findApp = await appService.getOneApplication(findProject[0]._id);
                if (typeof findProject === 'object') {
                    let newProject: interfaces.IGetPorjectByTool = {
                        projects: findProject,
                        images: findImage,
                        applications: findApp
                    };
                    result.unshift(newProject);
                }

            }
            const findTool = await toolService.getOneTool(findPI.result[0].toolsId);
            newData = {
                tool: findTool,
                result,
            };
        }
        const filterData = {
            filter: newData,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        };
        return filterData;
    } catch (e) {
        console.error(e.message);
    }
};