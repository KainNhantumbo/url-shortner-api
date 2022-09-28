import db from '../database/connection';
import { Application as IApp } from 'express';

async function bootstrap(app: IApp, port: string | number, db_uri: string) {
	try {
		await db(db_uri);
		app.listen(port, () => console.log('Server listening on port ', port));
	} catch (err) {
		console.error(err);
	}
}

export default bootstrap;
