import joi from 'joi';

const mailSchema = joi.string().max(500).min(1).trim();
const passwordSchema = joi.string().max(500).min(1).trim();

export const mongoIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

export const createAccountSchema = {
   mail: mailSchema.required(),
   password: passwordSchema.required(),
   userId: mongoIdSchema.required(),
};

export const updateAccountSchema = {
   mail: mailSchema,
   password: passwordSchema,
   userId: mongoIdSchema.required(),
};

export const loginSchema = {
   mail: mailSchema.required(),
   password: passwordSchema.required(),
};
