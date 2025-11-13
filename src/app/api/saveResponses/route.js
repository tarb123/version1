import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import mongoose from 'mongoose';

const PersonalityTest =
  mongoose.models.PersonalityTest || mongoose.model(
    'PersonalityTest', new mongoose.Schema({
      name: String,
      email: { type: String, unique: true },
      age: String,
      likertResponses: [],
      forcedResponses: [],
      sjtResponses: [],
      history: [
        {
          oldName: String,
          oldEmail: String,
          oldAge: String,
          changedAt: { type: Date, default: Date.now },
        },
      ],
      timestamp: { type: Date, default: Date.now },
    })
  );

export async function POST(req) {
  try {
    await dbConnect();
    const { name, email, age, likertResponses, forcedResponses, sjtResponses } = await req.json();

    console.log("📥 Incoming save request:", { name, email, age, likertResponses, forcedResponses, sjtResponses });

    if (!email) {
      return NextResponse.json({ success: false, message: "❌ Email is required" }, { status: 400 });
    }

    // 🔍 Find candidate by email
    let candidate = await PersonalityTest.findOne({ email });

    if (!candidate) {
      // If no candidate exists → create one
      candidate = new PersonalityTest({
        name,
        email,
        age,
        likertResponses,
        forcedResponses,
        sjtResponses,
        timestamp: new Date(),
      });
    } else {
      // If candidate exists → update responses
      candidate.name = name;
      candidate.age = age;
      candidate.likertResponses = likertResponses || [];
      candidate.forcedResponses = forcedResponses || [];
      candidate.sjtResponses = sjtResponses || [];
    }

    await candidate.save();

    return NextResponse.json({
      success: true,
      message: "✅ Candidate + responses saved successfully",
      candidate,
    });
  } catch (error) {
    console.error("❌ Save Error:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const candidate = await PersonalityTest.findOne().sort({ timestamp: -1 }); // latest
    return NextResponse.json({ success: true, candidate });
  } 
  catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
