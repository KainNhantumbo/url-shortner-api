import express, { Application } from 'express';
import bootstrap from './utils/server';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import cors, { CorsOptions } from 'cors';
import { rateLimit } from 'express-rate-limit';
import { error404Route } from './routes/404';
import globalErrorHandler from './middlewares/global-error-handler';
import { shortnerRoutes } from './routes/urls';
import { redirectRoutes } from './routes/redirects';
import { cleanupOldShortUrls } from './controllers/urls';

// env config
dotenv.config();
const PORT = process.env.PORT || 3500;
const cors_options: CorsOptions = {
	origin: [
		'http://localhost:3000',
		'http://127.0.0.1:5173',
		'https://url-shortner-app-six.vercel.app',
	],
};
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

// routes
app.use('/', redirectRoutes);
app.use('/urls/shorten', shortnerRoutes);

// error
app.use(error404Route);
app.use(globalErrorHandler);

bootstrap(app, PORT, process.env.MONGO_URI || '');
cleanupOldShortUrls();
