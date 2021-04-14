import * as projectService from '../../services/projects';
import * as schema from '../schemas/projects';
import multer from '../middlewares/handlerFiles';
import { Request, Response, NextFunction, Router } from 'express';
import { handlerValidation } from '../middlewares/handlerValidation';
import { response2xx, response4xx } from '../../utils/responses';
import { checkAuth } from '../middlewares/handlerAuth';

const router = Router();

router.post(
   '/',
   multer.array('images'),
   checkAuth,
   handlerValidation(schema.createProjectSchema, 'body'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const files: Express.Multer.File[] = (req.files as unknown) as Express.Multer.File[];
         const result = await projectService.createProject(req.body, files);
         if (typeof result === 'undefined') return next(result);
         typeof result === 'string' ? response4xx(res, result, 400) : response2xx(res, result, 201);
      } catch (e) {
         next(e);
      }
   }
);

router.post('/listall', async (req: Request, res: Response, next: NextFunction) => {
   try {
      const { limit, page } = req.body;
      const result = await projectService.getAllProjects(limit, page);
      if (typeof result === 'undefined') return next(result);
      typeof result === 'string' ? response4xx(res, result, 400) : response2xx(res, result, 200);
   } catch (e) {
      next(e);
   }
});

router.get('/tools', async (req: Request, res: Response, next: NextFunction) => {
   try {
      const result = await projectService.getCategories();
      if (typeof result === 'undefined') return next(result);
      typeof result === 'string' ? response4xx(res, result, 400) : response2xx(res, result, 200);
   } catch (e) {
      next(e);
   }
});

router.get(
   '/:id',
   handlerValidation({ id: schema.mongoIdSchema }, 'params'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const result = await projectService.getOneProject(req.params.id);
         if (typeof result === 'undefined') return next(result);
         typeof result === 'string' ? response4xx(res, result, 400) : response2xx(res, result, 200);
      } catch (e) {
         next(e);
      }
   }
);

router.get('/filter/:name', async (req: Request, res: Response, next: NextFunction) => {
   try {
      const result = await projectService.getToolByName(req.params.name);
      if (typeof result === 'undefined') return next(result);
      typeof result === 'string' ? response4xx(res, result, 400) : response2xx(res, result, 200);
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
         const result = await projectService.deleteProject(req.params.id);
         if (typeof result === 'undefined') return next(result);
         typeof result === 'string' ? response4xx(res, result, 400) : response2xx(res, result, 200);
      } catch (e) {
         next(e);
      }
   }
);

router.put(
   '/:id',
   multer.array('images'),
   handlerValidation({ id: schema.mongoIdSchema }, 'params'),
   handlerValidation(schema.updateProjectSchema, 'body'),
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         const files: Express.Multer.File[] = (req.files as unknown) as Express.Multer.File[];
         const result = await projectService.updateProject(req.params.id, req.body, files);
         if (typeof result === 'undefined') return next(result);
         typeof result === 'string' ? response4xx(res, result, 400) : response2xx(res, result, 200);
      } catch (e) {
         next(e);
      }
   }
);

export default router;
