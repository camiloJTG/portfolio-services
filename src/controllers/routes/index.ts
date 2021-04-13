import social from './socials';
import account from './accounts';
import project from './projects';
import { Application } from 'express';

const routes = (app: Application) => {
   const prefix = '/api';
   app.use(`${prefix}/social`, social);
   app.use(`${prefix}/account`, account);
   app.use(`${prefix}/project`, project);
};

export default routes;
