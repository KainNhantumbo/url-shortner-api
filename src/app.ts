import express, { Application } from 'express';
import * as dotenv from 'dotenv';
import bootstrap from './utils/server';

// env config
dotenv.config();
const PORT = process.env.PORT || 3500;
const app: Application = express();

bootstrap(app, PORT, process.env.MONGO_URI);
