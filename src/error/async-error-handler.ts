import {
	Request as IReq,
	Response as IRes,
	NextFunction as INextFn,
} from 'express';
import type { HandledFunction } from '../types/controllers';

/**
 * Wrapper function for global error handling.
 * @param fn asynchronous function to be wrapped and error handled.
 * @returns Promise<...>
 */
const asyncWrapper =
	(fn: HandledFunction) => (req: IReq, res: IRes, next: INextFn) =>
		Promise.resolve(fn(req, res, next)).catch(next);

export default asyncWrapper;
