import joi from 'joi';

const titleSchema = joi.string().max(500).min(1).trim();
const descriptionSchema = joi.string().max(1000000).min(1).trim();
const prioritySchema = joi.number();
const publicationSchema = joi.date();
const nameSchema = joi.string().max(500).min(1).trim();
const abbreviationSchema = joi.string().max(5).min(1).trim();
const urlAppSchema = joi.string().max(10000).min(1).trim();
const projectToolSchema = joi.object();
const toolsIdSchema = joi.array();
const applicationsSchema = joi.array();

export const mongoIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

export const createProjectSchema = {
   title: titleSchema.required(),
   description: descriptionSchema.required(),
   priority: prioritySchema.required(),
   publication: publicationSchema.required(),
   accountId: mongoIdSchema.required(),
   applications: applicationsSchema.items(
      joi.object({
         name: nameSchema.required(),
         abbreviation: abbreviationSchema.required(),
         urlApp: urlAppSchema.required(),
         description: descriptionSchema.required(),
      })
   ),
   projectTool: projectToolSchema,
};

export const updateProjectSchema = {
   title: titleSchema,
   description: descriptionSchema,
   priority: prioritySchema,
   publication: publicationSchema,
   accountId: mongoIdSchema,
   applications: applicationsSchema.items(
      joi.object({
         name: nameSchema,
         abbreviation: abbreviationSchema,
         urlApp: urlAppSchema,
         description: descriptionSchema,
      })
   ),
   projectTool: projectToolSchema,
};
