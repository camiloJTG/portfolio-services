import joi from 'joi';

const firstNameSchema = joi.string().max(500).min(1).trim();
const secondNameSchema = joi.string().max(500).min(1).trim();
const paternalSurnameSchema = joi.string().max(500).min(1).trim();
const maternalSurnameSchema = joi.string().max(500).min(1).trim();
const careerSchemma = joi.string().max(500).trim();
const phoneNumberSchema = joi.number();
const aboutMeSchema = joi.string().max(500000).min(10).trim();

export const idUserSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

export const createUserSchema = {
   firstName: firstNameSchema.required(),
   secondName: secondNameSchema.required(),
   paternalSurname: paternalSurnameSchema.required(),
   maternalSurname: maternalSurnameSchema.required(),
   career: careerSchemma.required(),
   phoneNumber: phoneNumberSchema.required(),
   aboutMe: aboutMeSchema.required(),
};

export const updateUserSchema = {
   firstName: firstNameSchema,
   secondName: secondNameSchema,
   paternalSurname: paternalSurnameSchema,
   maternalSurname: maternalSurnameSchema,
   career: careerSchemma,
   phoneNumber: phoneNumberSchema,
   aboutMe: aboutMeSchema,
};
