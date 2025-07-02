import mongoose from "mongoose";

let isConnected = false;
const dbConnect = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect("mongodb://192.168.18.62:27017/sanjeeda");
    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
};

export default dbConnect;
