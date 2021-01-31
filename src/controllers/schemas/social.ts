import joi from 'joi';

// Id mongo
export const mongoIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);