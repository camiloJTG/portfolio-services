import 'dotenv/config';
import * as error from '../controllers/middlewares/handlerError';
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from '../controllers/routes';
import { join } from 'path';

const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routes(app);

app.use(error.logError);
app.use(error.handlerError);

app.use(express.static(join(__dirname, 'public')));

export default app;
