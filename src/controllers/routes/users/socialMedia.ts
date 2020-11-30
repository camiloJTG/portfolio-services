import * as service from '../../../services/users/socialMedia';
import * as schema from '../../schemas/users/socialMediaSchema';
import { Request, Response, NextFunction, Router } from 'express';
import { response2xx, response4xx } from '../../../utils/responses';
import { handlerValidation } from '../../middlewares/handlerValidation';
import { checkAuth } from '../../middlewares/handlerAuth';

const router = Router();

router.post(
   '/',
   checkAuth,
   handlerValidation(schema.createSocialMediaSchema, 'body'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const result = await service.createSocialMedia(req.body);
         if (typeof result === 'undefined') return next(result);
         typeof result === 'string'
            ? response4xx(res, result, 400)
            : response2xx(res, result, 200);
      } catch (e) {
         next(e);
      }
   }
);

router.get(
   '/getByUserId/:userId',
   handlerValidation({ userId: schema.mongoIdSchema }, 'params'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const result = await service.getByUserId(req.params.userId);
         if (typeof result === 'undefined') return next(result);
         typeof result === 'string'
            ? response4xx(res, result, 400)
            : response2xx(res, result, 200);
      } catch (e) {
         next(e);
      }
   }
);

router.get(
   '/getBySocialMediaAndUser/:socialMediaId/:userId',
   handlerValidation(
      { socialMediaId: schema.mongoIdSchema, userId: schema.mongoIdSchema },
      'params'
   ),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const result = await service.getBySocialMediaIdAndUserId(
            req.params.socialMediaId,
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

router.put(
   '/:socialMediaId',
   checkAuth,
   handlerValidation({ socialMediaId: schema.mongoIdSchema }, 'params'),
   handlerValidation(schema.updateSocialMediaSchema, 'body'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const result = await service.updateSocialMedia(
            req.params.socialMediaId,
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

router.delete(
   '/:socialMediaId',
   checkAuth,
   handlerValidation({ socialMediaId: schema.mongoIdSchema }, 'params'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const result = await service.deleteSocialMedia(
            req.params.socialMediaId
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
