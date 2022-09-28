import mongoose from "mongoose";

// makes a connection to database
export default async function db (database_uri: string){
  return mongoose.connect(database_uri)
}