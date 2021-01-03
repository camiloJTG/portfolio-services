import * as service from '../../services/media/images';
import { Request, Response, NextFunction, Router } from 'express';
import { response2xx, response4xx } from '../../utils/responses';
import { checkAuth } from '../middlewares/handlerAuth';
import multer from "../middlewares/handlerFile";

const router = Router();

router.post(
    '/',
    checkAuth,
    multer.array('images', 12),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const files: Express.Multer.File[] = req.files as unknown as Express.Multer.File[];
            const { socialMediaId } = req.body;
            const result = await service.createImage(files, 'SocialMedia', socialMediaId);
            if (typeof result === 'undefined') return next(result);
            typeof result === 'string' ? response4xx(res, result, 400) : response2xx(res, result, 200);
        } catch (e) {
            next(e);
        }
    }
);

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { ids } = req.body;
        const result = await service.getImages(ids);
        if (typeof result === 'undefined') return next(result);
        typeof result === 'string' ? response4xx(res, result, 400) : response2xx(res, result, 200);
    } catch (e) {
        next(e);
    }
});

router.put('/:id', multer.single('images'), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await service.updateImage(req.file, req.params.id, 'SocialMedia');
        if (typeof result === 'undefined') return next(result);
        typeof result === 'string' ? response4xx(res, result, 400) : response2xx(res, result, 200);
    } catch (e) {
        next(e);
    }
});

export default router;