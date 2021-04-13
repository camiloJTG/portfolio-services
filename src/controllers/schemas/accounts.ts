import joi from 'joi';

const mailSchema = joi.string().max(500).min(1).trim();
const passwordSchema = joi.string().max(100).min(1).trim();
const usernameSchema = joi.string().max(10000).min(1).trim();
const aboutMeSchema = joi.string().max(1000).min(1).trim();
const jobTitleSchema = joi.string().max(1000).min(1).trim();

export const mongoIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

export const createAccountSchema = {
   mail: mailSchema.required(),
   password: passwordSchema.required(),
   username: usernameSchema.required(),
   aboutMe: aboutMeSchema.required(),
   jobTitle: jobTitleSchema.required()
};

export const updateAccountSchema = {
   mail: mailSchema,
   password: passwordSchema,
   username: usernameSchema,
   aboutMe: aboutMeSchema,
   jobTitle: jobTitleSchema
};

export const loginSchema = {
   mail: mailSchema.required(),
   password: passwordSchema.required()
};
