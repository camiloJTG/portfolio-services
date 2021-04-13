import joi from 'joi';

const titleSchema = joi.string().max(500).min(1).trim();
const subtitleSchema = joi.string().max(100).min(1).trim();
const registrationDateSchema = joi.date();
const descriptionSchema = joi.string().max(100000).min(1).trim();
const developmentsSchema = joi.array();
const nameSchemaSchema = joi.string().max(500).min(1).trim();
const urlRepositorySchema = joi.string().max(10000000).min(1).trim();
const toolsSchema = joi.array();
const websiteLinkSchema = joi.string().max(10000000).min(1).trim();
const prioritySchema = joi.number();

export const mongoIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

export const createProjectSchema = {
   title: titleSchema.required(),
   subtitle: subtitleSchema.required(),
   registrationDate: registrationDateSchema.required(),
   description: descriptionSchema.required(),
   developments: developmentsSchema.items(
      joi.object({
         name: nameSchemaSchema.required(),
         urlRepository: urlRepositorySchema.required()
      })
   ),
   tools: toolsSchema.items(
      joi.object({
         name: nameSchemaSchema.required(),
         websiteLink: websiteLinkSchema.required(),
         priority: prioritySchema.required()
      })
   )
};

export const updateProjectSchema = {
   title: titleSchema,
   subtitle: subtitleSchema,
   registrationDate: registrationDateSchema,
   description: descriptionSchema,
   developments: developmentsSchema.items(
      joi.object({
         name: nameSchemaSchema,
         urlRepository: urlRepositorySchema
      })
   ),
   tools: toolsSchema.items(
      joi.object({
         name: nameSchemaSchema,
         websiteLink: websiteLinkSchema,
         priority: prioritySchema
      })
   )
};
