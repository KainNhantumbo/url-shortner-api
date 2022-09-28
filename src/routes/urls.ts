import asyncWrapper from '../error/async-error-handler';
import { createShortUrl, getShortUrls } from '../controllers/urls';
import { Router } from 'express';

const router = Router();
router
	.route('/')
	.get(asyncWrapper(getShortUrls))
	.post(asyncWrapper(createShortUrl));

export { router as shortnerRoutes };
