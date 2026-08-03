import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      console.error("❌ MONGODB_URI is not set in Environment Variables!");
      process.exit(1);
    }

    const connectionInstance = await mongoose.connect(mongoUri, {
      dbName: DB_NAME,
    });

    console.log(
      `✅ MongoDB Connected : ${connectionInstance.connection.host}/${DB_NAME}`,
    );

    // console.log(connectionInstance);
  } catch (error) {
    console.error("❌ MongoDB Connection Error :", error.message);

    process.exit(1);
  }
};

export default connectDB;
