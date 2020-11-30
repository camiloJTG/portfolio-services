import * as schema from '../../schemas/users/languageSchema';
import * as languageService from '../../../services/users/languages';
import { Request, Response, NextFunction, Router } from 'express';
import { response2xx, response4xx } from '../../../utils/responses';
import { handlerValidation } from '../../middlewares/handlerValidation';
import { checkAuth } from '../../middlewares/handlerAuth';

const router: Router = Router();

router.post(
   '/',
   checkAuth,
   handlerValidation(schema.createLanguageSchema, 'body'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const result = await languageService.createLanguage(req.body);
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
   '/:userId',
   handlerValidation({ userId: schema.idMongoSchema }, 'params'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const result = await languageService.getLanguageByUserId(
            req.params.userId
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

router.delete(
   '/:languageId/:userId',
   checkAuth,
   handlerValidation(
      { languageId: schema.idMongoSchema, userId: schema.idMongoSchema },
      'params'
   ),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const { languageId, userId } = req.params;
         const result = await languageService.deleteLanguage(
            languageId,
            userId
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

router.put(
   '/:idLanguage',
   checkAuth,
   handlerValidation(schema.updateLanguageSchema, 'body'),
   handlerValidation({ idLanguage: schema.idMongoSchema }, 'params'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const result = await languageService.updateLanguage(
            req.params.idLanguage,
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
