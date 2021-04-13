import { NextFunction, Request, Response } from 'express';
import { SchemaMap, object } from 'joi';
import { deleteLocalFile } from '../../utils/files';

export const handlerValidation = (schema: SchemaMap, check: string) => {
   return (req: Request, res: Response, next: NextFunction) => {
      if (check === 'body') {
         const error = validate(req.body, schema);
         if (typeof req.file !== 'undefined') {
            const { path } = req.file;
            if (error) {
               deleteLocalFile(path);
            }
         }
         next(error);
      }
      if (check === 'params') {
         const error = validate(req.params, schema);
         if (typeof req.file !== 'undefined') {
            const { path } = req.file;
            if (error) {
               deleteLocalFile(path);
            }
         }
         next(error);
      }
   };
};

export const validate = (data: Request | unknown, schema: SchemaMap) => {
   const { error } = object(schema).validate(data);
   return error;
};
