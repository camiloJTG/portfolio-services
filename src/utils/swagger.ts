import config from '../configs/config';
import swaggerDoc, { Options } from 'swagger-jsdoc';
import { join } from 'path';

const pathApis = join(__dirname, `${config.swagger.pathFiles}`);

const options: Options = {
    definition: {

        openapi: '3.0.0',
        info: {
            title: 'Porfolio api rest',
            version: '1.0.0',
            description: 'Rest service for the project with name portfolio',
        },
        servers: [{ url: config.swagger.serverDev }]
    },
    apis: [pathApis]
};

export default swaggerDoc(options);