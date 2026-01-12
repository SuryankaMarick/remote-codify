import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectDB = async () => {
  try {

    if (!ENV.DB_URL) {
      throw new Error("Database URL is not defined in environment variables");
    }

    const connection = await mongoose.connect(ENV.DB_URL);
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); //0-> success, 1-> failure
  }
}