import * as accountService from '../../services/accounts';
import * as schema from '../schemas/accounts';
import { Request, Response, NextFunction, Router } from 'express';
import { handlerValidation } from '../middlewares/handlerValidation';
import { response2xx, response4xx } from '../../utils/responses';
import { checkAuth } from '../middlewares/handlerAuth';

const router = Router();

router.post(
   '/',
   checkAuth,
   handlerValidation(schema.createAccountSchema, 'body'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const result = await accountService.createAccount(req.body);
         if (typeof result === 'undefined') return next(result);
         typeof result === 'string' ? response4xx(res, result, 400) : response2xx(res, result, 201);
      } catch (e) {
         next(e);
      }
   }
);

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
   try {
      const result = await accountService.getAccount();
      if (typeof result === 'undefined') return next(result);
      typeof result === 'string' ? response4xx(res, result, 400) : response2xx(res, result, 200);
   } catch (e) {
      next(e);
   }
});

router.put(
   '/:id',
   checkAuth,
   handlerValidation({ id: schema.mongoIdSchema }, 'params'),
   handlerValidation(schema.updateAccountSchema, 'body'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const result = await accountService.updateAccount(req.params.id, req.body);
         if (typeof result === 'undefined') return next(result);
         typeof result === 'string' ? response4xx(res, result, 400) : response2xx(res, result, 201);
      } catch (e) {
         next(e);
      }
   }
);

router.post(
   '/login',
   handlerValidation(schema.loginSchema, 'body'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const result = await accountService.login(req.body);
         if (typeof result === 'undefined') return next(result);
         typeof result === 'string' ? response4xx(res, result, 400) : response2xx(res, result, 201);
      } catch (e) {
         next(e);
      }
   }
);

export default router;
