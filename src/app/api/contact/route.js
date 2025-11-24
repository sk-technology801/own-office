// src/app/api/contact/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req) {
  try {
    const body = await req.json();

    // basic validation
    const { name, email, message, projectType } = body || {};
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    await connectDB();

    const contact = await Contact.create({
      name,
      email,
      message,
      projectType: projectType || "",
    });

    return NextResponse.json({ success: true, data: contact }, { status: 201 });
  } catch (err) {
    console.error("API /api/contact error:", err);
    return NextResponse.json({ success: false, error: err.message || "Server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const contacts = await Contact.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data: contacts });
  } catch (err) {
    console.error("API /api/contact GET error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
