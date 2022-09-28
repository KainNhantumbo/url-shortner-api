import mongoose from 'mongoose';

// makes a connection to database
export default function db(database_uri: string) {
	return mongoose.connect(database_uri);
}
