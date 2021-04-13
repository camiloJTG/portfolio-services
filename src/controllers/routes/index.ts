import swaggerUI from 'swagger-ui-express';
import swagger from '../../utils/swagger';
import social from './socials';
import account from './accounts';
import project from './projects';
import { Application } from 'express';

const routes = (app: Application) => {
   const prefix = '/api';
   app.use(`${prefix}/social`, social);
   app.use(`${prefix}/account`, account);
   app.use(`${prefix}/project`, project);
   app.use(`${prefix}/doc`, swaggerUI.serve, swaggerUI.setup(swagger));
};

export default routes;
