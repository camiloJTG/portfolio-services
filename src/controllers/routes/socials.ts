import * as socialService from '../../services/socials';
import * as schema from '../schemas/socials';
import { Request, Response, NextFunction, Router } from 'express';
import { handlerValidation } from '../middlewares/handlerValidation';
import { response2xx, response4xx } from '../../utils/responses';
import multer from '../middlewares/handlerFiles';
import { checkAuth } from '../middlewares/handlerAuth';

const router = Router();

router.post(
   '/',
   checkAuth,
   multer.single('images'),
   handlerValidation(schema.createSocialSchema, 'body'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const result = await socialService.createSocial(req.body, req.file);
         if (typeof result === 'undefined') return next(result);
         typeof result === 'string' ? response4xx(res, result, 400) : response2xx(res, result, 201);
      } catch (e) {
         next(e);
      }
   }
);

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
   try {
      const result = await socialService.getAllSocial();
      if (typeof result === 'undefined') return next(result);
      typeof result === 'string' ? response4xx(res, result, 400) : response2xx(res, result, 201);
   } catch (e) {
      next(e);
   }
});

router.delete(
   '/:id',
   checkAuth,
   handlerValidation({ id: schema.mongoIdSchema }, 'params'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const result = await socialService.deleteSocial(req.params.id);
         if (typeof result === 'undefined') return next(result);
         typeof result === 'string' ? response4xx(res, result, 400) : response2xx(res, result, 200);
      } catch (e) {
         next(e);
      }
   }
);

router.put(
   '/:id',
   checkAuth,
   multer.single('images'),
   handlerValidation({ id: schema.mongoIdSchema }, 'params'),
   handlerValidation(schema.updateSocialSchema, 'body'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const result = await socialService.updateSocial(req.params.id, req.body, req.file);
         if (typeof result === 'undefined') return next(result);
         typeof result === 'string' ? response4xx(res, result, 400) : response2xx(res, result, 201);
      } catch (e) {
         next(e);
      }
   }
);

export default router;
