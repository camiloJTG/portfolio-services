import * as service from '../../services/users/socialMedia';
import { Request, Response, NextFunction, Router } from 'express';
import { response2xx, response4xx } from '../../utils/responses';
import { handlerValidation } from '../middlewares/handlerValidation';
import { mongoIdSchema } from "../schemas/social";

const router = Router();

router.get(
    '/lastThree/:accountId',
    handlerValidation({ accountId: mongoIdSchema }, 'params'),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await service.getLastThreeSocialRegistered(req.params.accountId);
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
    '/:accountId',
    handlerValidation({ accountId: mongoIdSchema }, 'params'),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await service.getAllSocialMedia(req.params.accountId);

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
