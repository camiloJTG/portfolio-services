import projectModel from '../models/projects';
import config from '../configs/config';
import { deleteLocalFile } from '../utils/files';
import { uploadFile, deleteFile } from '../apis/cloudinary';
import { ICreateProject, IUpdateProject, ITools } from '../interfaces/projects';

const { cloudinary } = config;

export const createProject = async (project: ICreateProject, media: Express.Multer.File[]) => {
   try {
      const { subtitle, developments, tools } = project;

      // Business logic
      if (subtitle.length > 100) return `The subtitle character limit is 100 characters`;

      // Business logic for developments
      for (const devep of developments) {
         const findUrl = await projectModel
            .find({
               'developments.urlRepository': devep.urlRepository
            })
            .lean();
         if (findUrl.length !== 0) {
            media.map((x) => deleteLocalFile(x.path));
            return `The url repository ${devep.urlRepository} has already registered`;
         }
      }

      // Business logic for tools
      for (const tool of tools) {
         const findLink = await projectModel.find({ 'tools.websiteLink': tool.websiteLink }).lean();
         if (findLink.length !== 0) {
            media.map((x) => deleteLocalFile(x.path));
            return `The reposotiry ${tool.websiteLink} has already registered`;
         }
         const countPriority = await projectModel
            .find({ 'tools.priority': tool.priority })
            .countDocuments()
            .lean();
         if (tool.priority === 1) {
            if (countPriority > 4) {
               media.map((x) => deleteLocalFile(x.path));
               return `The maximum number of records with priority 1 is 4`;
            }
         }
      }

      // Upload files in cloudinary
      for (const [i, m] of media.entries()) {
         const uploadMedia = await uploadFile(m.path, cloudinary.projectFolder);
         if (typeof uploadMedia === 'undefined') {
            media.map((x) => deleteLocalFile(x.path));
            return 'Error when uploading the image to the server. Try again';
         }
         if (m.filename.toUpperCase().indexOf('.SVG') > -1) {
            const logo = {
               localUrl: m.path,
               remoteId: uploadMedia.public_id,
               remoteUrl: uploadMedia.secure_url
            };
            tools[i] = { ...tools[i], logo };
         } else {
            const image = {
               localUrl: m.path,
               remoteId: uploadMedia.public_id,
               remoteUrl: uploadMedia.secure_url
            };
            project = { ...project, image };
         }
      }
      const save = await projectModel.create(project);
      return save;
   } catch (e) {
      console.error(e.message);
   }
};

export const deleteProject = async (id: string) => {
   try {
      const findData = await projectModel.findById(id).lean();
      if (!findData) return `No data found`;

      // Delete local and remote media
      deleteFile([findData.image.remoteId]);
      deleteLocalFile(findData.image.localUrl);
      findData.tools.map((x) => {
         deleteFile([x.logo.remoteId]);
         deleteLocalFile(x.logo.localUrl);
      });

      // Delete data
      const deleted = await projectModel.deleteOne({ _id: id });
      return deleted.deletedCount;
   } catch (e) {
      console.error(e.message);
   }
};

export const updateProject = async (
   id: string,
   project: IUpdateProject,
   media: Express.Multer.File[]
) => {
   try {
      const { subtitle, developments, tools } = project;

      // Business logic
      if (subtitle.length > 100) return `The subtitle character limit is 100 characters`;

      // Business logic for developments
      for (const devep of developments) {
         const findUrl = await projectModel
            .find({
               'developments.urlRepository': devep.urlRepository
            })
            .lean();
         if (findUrl.length !== 0) {
            if (typeof media !== 'undefined') media.map((x) => deleteLocalFile(x.path));
            return `The url repository ${devep.urlRepository} has already registered`;
         }
      }

      // Business logic for tools
      for (const tool of tools) {
         const findLink = await projectModel.find({ 'tools.websiteLink': tool.websiteLink }).lean();
         if (findLink.length !== 0) {
            if (typeof media !== 'undefined') media.map((x) => deleteLocalFile(x.path));
            return `The reposotiry ${tool.websiteLink} has already registered`;
         }
         const countPriority = await projectModel
            .find({ 'tools.priority': tool.priority })
            .countDocuments()
            .lean();
         if (tool.priority === 1) {
            if (countPriority > 4) {
               if (typeof media !== 'undefined') media.map((x) => deleteLocalFile(x.path));
               return `The maximum number of records with priority 1 is 4`;
            }
         }
      }

      if (media) {
         // Upload files in cloudinary
         for (const [i, m] of media.entries()) {
            const uploadMedia = await uploadFile(m.path, cloudinary.projectFolder);
            if (typeof uploadMedia === 'undefined') {
               if (typeof media !== 'undefined') media.map((x) => deleteLocalFile(x.path));
               return 'Error when uploading the image to the server. Try again';
            }
            if (m.filename.toUpperCase().indexOf('.SVG') > -1) {
               const logo = {
                  localUrl: m.path,
                  remoteId: uploadMedia.public_id,
                  remoteUrl: uploadMedia.secure_url
               };
               tools[i] = { ...tools[i], logo };
            } else {
               const image = {
                  localUrl: m.path,
                  remoteId: uploadMedia.public_id,
                  remoteUrl: uploadMedia.secure_url
               };
               project = { ...project, image };
            }
         }
      }

      const updateSocial = await projectModel.updateOne({ _id: id }, { $set: project });
      return updateSocial.nModified;
   } catch (e) {
      console.error(e.message);
   }
};

export const getOneProject = async (id: string) => {
   try {
      const findData = await projectModel.findById(id).lean();
      if (!findData) return `No data found`;
      return findData;
   } catch (e) {
      console.error(e.message);
   }
};

export const getCategories = async () => {
   try {
      let onlyMonth: ITools[] = [];

      // Business Logic
      const findData = await projectModel.find().lean();
      if (findData.length === 0) return `No data found`;
      findData.map((data) => {
         data.tools.map((tool) => onlyMonth.unshift(tool));
      });
      const allTools = Array.from(new Set(onlyMonth.map((a) => a.name))).map((name) => {
         return onlyMonth.find((a) => a.name === name);
      });
      return allTools;
   } catch (e) {
      console.error(e.message);
   }
};

export const getAllProjects = async (limit: number = 10, page: number = 1) => {
   try {
      const findData = await projectModel
         .find()
         .limit(limit * 1)
         .skip((page - 1) * limit)
         .sort({ createdAt: -1 })
         .lean();
      if (findData.length === 0) return `No data found`;
      const count = await projectModel.countDocuments();
      const newData = {
         findData,
         totalPages: Math.ceil(count / limit),
         currentPage: page
      };
      return findData;
   } catch (e) {
      console.error(e.message);
   }
};

export const getToolByName = async (name: string) => {
   try {
      const findTool = await projectModel.find({ 'tools.name': name }).lean();
      if (findTool.length === 0) return `No data found`;
      return findTool;
   } catch (e) {
      console.log(e.message);
   }
};
