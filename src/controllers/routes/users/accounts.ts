import * as schema from '../../schemas/users/accountSchema';
import * as service from '../../../services/users/accounts';
import { Request, Response, NextFunction, Router } from 'express';
import { response2xx, response4xx } from '../../../utils/responses';
import { handlerValidation } from '../../middlewares/handlerValidation';
import { checkAuth } from '../../middlewares/handlerAuth';

const router = Router();

router.post('/',
    checkAuth,
    handlerValidation(schema.createAccountSchema, 'body'),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await service.createAccount(req.body);
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

router.put(
    '/:accountId',
    checkAuth,
    handlerValidation({ accountId: schema.mongoIdSchema }, 'params'),
    handlerValidation(schema.updateAccountSchema, 'body'),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await service.updateAccount(
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

router.post(
    '/login',
    handlerValidation(schema.loginSchema, 'body'),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await service.login(req.body);
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
