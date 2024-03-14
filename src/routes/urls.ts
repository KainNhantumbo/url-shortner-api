import { Router } from 'express';
import { createShortUrl, getShortUrls } from '../controllers/urls';
import asyncWrapper from '../error/async-error-handler';

const router = Router();
router
	.route('/')
	.get(asyncWrapper(getShortUrls))
	.post(asyncWrapper(createShortUrl));

export { router as shortnerRoutes };
