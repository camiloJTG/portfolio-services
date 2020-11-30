import * as userService from '../../../services/users/users';
import * as schema from '../../schemas/users/userSchema';
import { Router, Request, Response, NextFunction } from 'express';
import { response2xx, response4xx } from '../../../utils/responses';
import { handlerValidation } from '../../middlewares/handlerValidation';
import { checkAuth } from '../../middlewares/handlerAuth';

const router: Router = Router();

router.post(
   '/',
   checkAuth,
   handlerValidation(schema.createUserSchema, 'body'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const result = await userService.createUser(req.body);
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
   '/:id',
   handlerValidation({ id: schema.idUserSchema }, 'params'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const result = await userService.getUserById(req.params.id);
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
   '/:id',
   checkAuth,
   handlerValidation({ id: schema.idUserSchema }, 'params'),
   handlerValidation(schema.updateUserSchema, 'body'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const result = await userService.updateUser(req.params.id, req.body);
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
