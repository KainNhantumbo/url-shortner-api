import { Schema, model } from 'mongoose';

interface IUrl {
	fullUrl: string;
	shortUrl: string;
	urlId: string;
}

const UrlSchema = new Schema<IUrl>(
	{
		fullUrl: {
			type: String,
			maxlength: [3000, 'Url provided is too long.'],
			required: true,
		},
		shortUrl: { type: String, required: true },
		urlId: { type: String, required: true },
	},
	{ timestamps: true }
);

const UrlModel = model('Url', UrlSchema);

export default UrlModel;
