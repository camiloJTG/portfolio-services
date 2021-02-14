import joi from 'joi';

// Account data
const mailSchema = joi.string().max(500).min(1).trim();
const passwordSchema = joi.string().max(500).min(1).trim();
const usernameSchema = joi.string().max(500).min(1).trim();

// Social media data
const fullNameSchema = joi.string().max(100).min(1).trim();
const prioritySchema = joi.number();
const urlSchema = joi.string().max(100000000).min(1).trim();
const socialMedia = joi.array();

// Id mongo
export const mongoIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

export const createPersonalSchema = {
   mail: mailSchema.required(),
   password: passwordSchema.required(),
   username: usernameSchema.required(),
   socialMedia: socialMedia.items(
      joi.object({
         fullName: fullNameSchema.required(),
         priority: prioritySchema.required(),
         url: urlSchema.required(),
      })
   ),
};
