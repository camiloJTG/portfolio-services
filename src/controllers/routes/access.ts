import * as schema from '../schemas/access';
import * as service from '../../services/access/login';
import { Request, Response, NextFunction, Router } from 'express';
import { response2xx, response4xx } from '../../utils/responses';
import { handlerValidation } from '../middlewares/handlerValidation';

const router = Router();

router.post('/',
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