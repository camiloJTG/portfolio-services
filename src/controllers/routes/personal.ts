import * as schema from '../schemas/personal';
import * as service from '../../services/personal';
import { Request, Response, NextFunction, Router } from 'express';
import { response2xx, response4xx } from '../../utils/responses';
import { handlerValidation } from '../middlewares/handlerValidation';
import { checkAuth } from '../middlewares/handlerAuth';

const router = Router();

router.post(
   '/',
   checkAuth,
   handlerValidation(schema.createPersonalSchema, 'body'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const { account, socialMedia } = req.body;
         let result: any;
         if (
            typeof account !== 'undefined' &&
            typeof socialMedia !== 'undefined'
         )
            result = await service.createPersonal(req.body);

         if (
            typeof account === 'undefined' &&
            typeof socialMedia === 'undefined'
         )
            response4xx(
               res,
               'No se encontró el objeto account o socialMedia',
               404
            );

         if (typeof result === 'undefined') return next(result);

         typeof result === 'string'
            ? response4xx(res, result, 400)
            : response2xx(res, result, 201);
      } catch (e) {
         next(e);
      }
   }
);

router.get(
   '/:accountId',
   handlerValidation({ accountId: schema.mongoIdSchema }, 'params'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const result = await service.getPersonal(req.params.accountId);

         if (typeof result === 'undefined') return next(result);

         typeof result === 'string'
            ? response4xx(res, result, 400)
            : response2xx(res, result, 200);
      } catch (e) {
         next(e);
      }
   }
);

router.put(
   '/:accountId',
   checkAuth,
   handlerValidation({ accountId: schema.mongoIdSchema }, 'params'),
   handlerValidation(schema.updatePersonalSchema, 'body'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const { account, socialMedia } = req.body;
         if (
            typeof account === 'undefined' &&
            typeof socialMedia === 'undefined'
         ) {
            response4xx(
               res,
               'No se encontró el objeto account o socialMedia',
               404
            );
         }

         const result = await service.updatePersonal(
            req.params.accountId,
            req.body
         );

         if (typeof result === 'undefined') return next(result);

         typeof result === 'string'
            ? response4xx(res, result, 400)
            : response2xx(res, result, 200);
      } catch (e) {
         next(e);
      }
   }
);

export default router;
