import * as services from '../../services/tools/tools';
import * as schema from '../schemas/tools';
import { Request, Response, NextFunction, Router } from "express";
import { response2xx, response4xx } from '../../utils/responses';
import { handlerValidation } from '../middlewares/handlerValidation';

const router = Router();

router.post(
    '/',
    handlerValidation(schema.createToolSchema, 'body'),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await services.createTool(req.body);
            if (typeof result === 'undefined') return next(result);
            typeof result === 'string'
                ? response4xx(res, result, 400)
                : response2xx(res, result, 201);
        } catch (e) {
            next(e);
        }
    }
);

router.put(
    '/:toolId',
    handlerValidation({ toolId: schema.mongoIdSchema }, 'params'),
    handlerValidation(schema.updateToolSchema, 'body'),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await services.updateTool(req.params.toolId, req.body);
            if (typeof result === 'undefined') return next(result);
            typeof result === 'string'
                ? response4xx(res, result, 400)
                : response2xx(res, result, 201);
        } catch (e) {
            console.error(e.message);
        }
    }
);

router.get(
    '/',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await services.getAllTool();
            if (typeof result === 'undefined') return next(result);
            typeof result === 'string'
                ? response4xx(res, result, 400)
                : response2xx(res, result, 200);
        } catch (e) {
            console.error(e.message);
        }
    }
);

router.get(
    '/oneTool/:toolId',
    handlerValidation({ toolId: schema.mongoIdSchema }, 'params'),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await services.getOneTool(req.params.toolId);
            if (typeof result === 'undefined') return next(result);
            typeof result === 'string'
                ? response4xx(res, result, 400)
                : response2xx(res, result, 200);
        } catch (e) {
            console.error(e.emssage);
        }
    }
);

export default router;