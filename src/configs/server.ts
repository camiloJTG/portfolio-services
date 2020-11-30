import 'dotenv/config';

import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from '../controllers/routes';

import {
   handlerError,
   logError,
} from '../controllers/middlewares/handlerError';

const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routes(app);

app.use(logError);
app.use(handlerError);

export default app;
