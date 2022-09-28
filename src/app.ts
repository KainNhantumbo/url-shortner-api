import express, { Application } from 'express';
import bootstrap from './utils/server';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import cors, { CorsOptions } from 'cors';
import { rateLimit } from 'express-rate-limit';
import { error404Route } from './routes/404';
import globalErrorHandler from './middlewares/global-error-handler';

// env config
dotenv.config();
const PORT = process.env.PORT || 3500;
const cors_options: CorsOptions = { origin: 'http://localhost:3000' };
const limiter = rateLimit({
	windowMs: 10 * 60 * 1000,
	max: 1200,
	standardHeaders: true,
	legacyHeaders: false,
});
const app: Application = express();

// server config
app.use(helmet());
app.use(cors(cors_options));
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(error404Route);
app.use(globalErrorHandler)

bootstrap(app, PORT, process.env.MONGO_URI || '');
