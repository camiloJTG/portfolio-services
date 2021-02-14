import config from '../configs/config';
import swaggerDoc, { Options } from 'swagger-jsdoc';
import { join } from 'path';

const pathApis = join(__dirname, `${config.swagger.pathFiles}`);

const options: Options = {
   definition: {
      openapi: '3.0.0',
      info: {
         title: 'Portafolio',
         version: '1.0.0',
         description:
            'Documentación de servicios asociados al proyecto "Portafolio"',
      },
      servers: [
         { url: config.swagger.serverDev },
         { url: config.swagger.serverProd },
      ],
   },
   apis: [pathApis],
};

export default swaggerDoc(options);
