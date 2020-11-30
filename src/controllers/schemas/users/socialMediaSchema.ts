import joi from 'joi';

const fullNameSchema = joi.string().max(100).min(1).trim();
const abbreviationSchema = joi.string().max(100).min(1).trim();
const urlSchema = joi.string().max(100000000).min(1).trim();

export const mongoIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

export const createSocialMediaSchema = {
   fullName: fullNameSchema.required(),
   abbreviation: abbreviationSchema.required(),
   url: urlSchema.required(),
   userId: mongoIdSchema.required(),
};

export const updateSocialMediaSchema = {
   fullName: fullNameSchema,
   abbreviation: abbreviationSchema,
   url: urlSchema,
   userId: mongoIdSchema.required(),
};
