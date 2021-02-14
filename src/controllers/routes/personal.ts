import * as schema from '../schemas/personal';
import * as service from '../../services/users/personal';
import { Request, Response, NextFunction, Router } from 'express';
import { response2xx, response4xx } from '../../utils/responses';
import { handlerValidation } from '../middlewares/handlerValidation';
import { checkAuth } from '../middlewares/handlerAuth';

const router = Router();

router.post(
   '/',
   handlerValidation(schema.createPersonalSchema, 'body'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const result = await service.createPersonal(req.body);
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

export default router;
