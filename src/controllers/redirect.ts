import { Request as IReq, Response as IRes } from 'express';
import UrlModel from '../models/Url';
import BaseError from '../error/base-error';

const redirect = async (req: IReq, res: IRes): Promise<void | IRes> => {
	const { code } = req.params;
	const url = await UrlModel.findOne({ urlId: code });
	if (!url) throw new BaseError('Url not found.', 404);

	res.status(200).redirect(url.fullUrl);
};

export { redirect };
