// src/models/Contact.js
import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    projectType: { type: String, default: "" },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
