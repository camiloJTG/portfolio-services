import joi from 'joi';

const fullNameSchema = joi.string().max(500).min(1).trim();
const abbreviationSchema = joi.string().max(500).min(1).trim();
const domainLevelSchema = joi.string().max(500).min(1).trim();

export const idMongoSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

export const createLanguageSchema = {
   fullName: fullNameSchema.required(),
   abbreviation: abbreviationSchema.required(),
   domainLevel: domainLevelSchema.required(),
   userId: idMongoSchema.required(),
};

export const updateLanguageSchema = {
   fullName: fullNameSchema,
   abbreviation: abbreviationSchema,
   domainLevel: domainLevelSchema,
   userId: idMongoSchema.required(),
};
