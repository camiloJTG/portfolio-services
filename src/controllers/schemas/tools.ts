import joi from 'joi';

// Id mongo
export const mongoIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

// Tool data
const nameSchema = joi.string().max(500).min(1).trim();
const prioritySchema = joi.number();

export const createToolSchema = {
   name: nameSchema.required(),
   priority: prioritySchema.required(),
};

export const updateToolSchema = {
   name: nameSchema,
   priority: prioritySchema,
};
