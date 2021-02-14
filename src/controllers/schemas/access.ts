import joi from 'joi';

// Login data
const mailSchema = joi.string().max(500).min(1).trim();
const passwordSchema = joi.string().max(500).min(1).trim();

// Id mongo
export const mongoIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

export const loginSchema = {
   mail: mailSchema.required(),
   password: passwordSchema.required(),
};
