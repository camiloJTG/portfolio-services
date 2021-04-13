import joi from 'joi';

const nameSchema = joi.string().max(500).min(1).trim();
const purposeSchema = joi.string().max(100).min(1).trim();
const socialLinkSchema = joi.string().max(10000).min(1).trim();
const prioritySchema = joi.number();

export const mongoIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

export const createSocialSchema = {
   name: nameSchema.required(),
   purpose: purposeSchema.required(),
   socialLink: socialLinkSchema.required(),
   priority: prioritySchema.required()
};

export const updateSocialSchema = {
   name: nameSchema,
   purpose: purposeSchema,
   socialLink: socialLinkSchema,
   priority: prioritySchema
};
