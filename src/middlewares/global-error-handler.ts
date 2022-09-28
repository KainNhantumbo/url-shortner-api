import {
	Request as IReq,
	Response as IRes,
	NextFunction as INextFn,
} from 'express';
import BaseError from '../error/base-error';

/**
 * Error handler middleware.
 * @param err error
 * @param req request
 * @param res response
 * @param next next middleware Function
 */
const globalErrorHandler = (err: any, req: IReq, res: IRes, next: INextFn) => {
	if (err instanceof BaseError)
		return res
			.status(err.statusCode)
			.json({ message: err.message, err_code: err.statusCode });

	// console.error(err) // development mode only

	return res.status(500).json({
		status: 'Internal Server Error',
		err_code: 500,
		message: 'An error occured while processing your request.',
	});
};

export default globalErrorHandler;
