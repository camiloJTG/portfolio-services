import { NextFunction, Request, Response } from 'express';
import { SchemaMap, ValidationError, object } from 'joi';
//import { unlink; } from 'fs-extra';

export const handlerValidation = (schema: SchemaMap, check: string) => {
   return (req: Request, res: Response, next: NextFunction) => {
      if (check === 'body') {
         const error = validate(req.body, schema);
         next(error);
      }
      if (check === 'params') {
         const error = validate(req.params, schema);
         next(error);
      }
   };
};

export const validate = (data: Request | unknown, schema: SchemaMap) => {
   const { error } = object(schema).validate(data);
   return error;
};