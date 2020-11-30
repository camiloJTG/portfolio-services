import swaggerUI from 'swagger-ui-express';
import swagger from '../../utils/swagger';

import users from './users/users';
import languages from './users/languages';
import socialMedia from './users/socialMedia';
import account from './users/accounts';

import { Application } from 'express';

const routers = (app: Application) => {
   const prefix = '/api';
   app.use(`${prefix}/users`, users);
   app.use(`${prefix}/languages`, languages);
   app.use(`${prefix}/socialsMedia`, socialMedia);
   app.use(`${prefix}/accounts`, account);
   app.use(`${prefix}/docs/`, swaggerUI.serve, swaggerUI.setup(swagger));
};

export default routers;
