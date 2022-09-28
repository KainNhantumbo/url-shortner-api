import { Request as IReq, Response as IRes } from 'express';
import UrlModel from '../models/Url';
import BaseError from '../error/base-error';
import * as validUrl from 'valid-url';
import * as dotenv from 'dotenv';
import shortId from 'shortid';

// load environment variables
dotenv.config();

const getShortUrls = async (req: IReq, res: IRes): Promise<void | IRes> => {
	const shortUrls = await UrlModel.find({});
	res.status(200).json(shortUrls);
};

const createShortUrl = async (req: IReq, res: IRes): Promise<void | IRes> => {
	const { url } = req.body;
	const baseUrl = process.env.BASE_URL || '';

	if (!validUrl.isUri(baseUrl))
		throw new BaseError('Invalid base url, check and try again.', 400);
	if (!validUrl.isUri(url))
		throw new BaseError('Invalid url, check and try again.', 400);

	const savedUrl = await UrlModel.findOne({ fullUrl: url });
	if (savedUrl) return res.status(200).json(savedUrl);

	const urlId = shortId.generate();
	const shortUrl = baseUrl + urlId;
	const newShortUrl = UrlModel.create({ fullUrl: url, urlId, shortUrl });
	res.status(201).json(newShortUrl);
};

export { getShortUrls, createShortUrl };
