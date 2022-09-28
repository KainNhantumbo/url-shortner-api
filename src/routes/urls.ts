import asyncWrapper from '../error/async-error-handler';
import { createShortUrl } from '../controllers/urls';
import { Router } from 'express';

const router = Router();
router.route('/').post(asyncWrapper(createShortUrl));

export { router as shortnerRoutes };
