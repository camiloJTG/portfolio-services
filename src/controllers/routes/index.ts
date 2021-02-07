import swaggerUI from 'swagger-ui-express';
import swagger from '../../utils/swagger';
import personal from './personal';
import access from './access';
import social from './social';
import project from './project';
import tools from './tools';
import media from './media';
import { Application } from 'express';

const routers = (app: Application) => {
   const prefix = '/api';
   app.use(`${prefix}/access`, access);
   app.use(`${prefix}/media`, media);
   app.use(`${prefix}/personal`, personal);
   app.use(`${prefix}/social`, social);
   app.use(`${prefix}/projects`, project);
   app.use(`${prefix}/tools`, tools);
   app.use(`${prefix}/docs/`, swaggerUI.serve, swaggerUI.setup(swagger));
};

export default routers;
