import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  // mongoose.set("stringQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected!");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "bank_app",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;

    console.log("MongoDb is connected!");
  } catch (error) {
    console.log(error);
  }
};
