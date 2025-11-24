import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("❌ Missing MONGODB_URI in .env");
  }

  try {
    const db = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("✔ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    throw error;
  }
}
