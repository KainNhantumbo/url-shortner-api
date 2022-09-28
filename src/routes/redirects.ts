import { Router } from 'express';
import asyncWrapper from '../error/async-error-handler';
import { redirect } from '../controllers/redirect';

const router = Router();
router.route('/:code').get(asyncWrapper(redirect));

export { router as redirectRoutes };
