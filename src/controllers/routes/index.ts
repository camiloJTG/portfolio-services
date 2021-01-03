import swaggerUI from 'swagger-ui-express';
import swagger from '../../utils/swagger';
import personal from './personal';
import access from './access';
import project from './projects/projects';
import application from './projects/applications';
import tools from './projects/tools';
import media from './media';
import { Application } from 'express';

const routers = (app: Application) => {
   const prefix = '/api';
   app.use(`${prefix}/access`, access);
   app.use(`${prefix}/medias`, media);
   app.use(`${prefix}/personal`, personal);
   app.use(`${prefix}/projects`, project);
   app.use(`${prefix}/applications`, application);
   app.use(`${prefix}/tools`, tools);
   app.use(`${prefix}/docs/`, swaggerUI.serve, swaggerUI.setup(swagger));
};

export default routers;
