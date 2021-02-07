import * as services from '../../services/projects/projects';
import * as schema from '../schemas/project';
import { Request, Response, NextFunction, Router } from "express";
import { response2xx, response4xx } from '../../utils/responses';
import { handlerValidation } from '../middlewares/handlerValidation';

const router = Router();

router.post(
    '/',
    handlerValidation(schema.createProjectSchema, 'body'),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await services.createProject(req.body);
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
    '/:projectId',
    handlerValidation({ projectId: schema.mongoIdSchema }, 'params'),
    handlerValidation(schema.updateProjectSchema, 'body'),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await services.updateProject(req.params.projectId, req.body);
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
    '/getLastProject',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await services.getLastRegisteredProject();
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
    '/getSixProject',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await services.getLastSixRegisteredProject();
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
    '/getByProjectId/:projectId',
    handlerValidation({ projectId: schema.mongoIdSchema }, 'params'),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await services.getByProjectId(req.params.projectId);
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
    '/',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await services.getAllProject(Number(req.query.page), Number(req.query.limit));
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
    '/getByToolId/:toolId',
    handlerValidation({ toolId: schema.mongoIdSchema }, 'params'),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await services.getProjectByToolId(req.params.toolId, Number(req.query.page), Number(req.query.limit));
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