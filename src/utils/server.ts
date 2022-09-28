import db from '../database/connection';
import { Application as IApp } from 'express';

type Port = string | number;

/**
 * @param app express.Application
 * @param port string | number
 * @param db_uri database connection string
 * @returns Promise<void>
 * @instance starts the server
 */
async function bootstrap(app: IApp, port: Port, db_uri: string) {
	try {
		await db(db_uri);
		console.log('Connection to database has been established successfuly.');
		app.listen(port, () => console.log('Server listening on port ', port));
	} catch (err) {
		console.error(err);
	}
}

export default bootstrap;
