import { Request, Response, NextFunction } from 'express';

export type ControllerResponse = Promise<
	void | Response<any, Record<string, any>> | undefined
>;

export type HandledFunction = (
	req: Request,
	res: Response,
	next: NextFunction
) => ControllerResponse;
