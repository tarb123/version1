// src/app/api/saveResponses/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import mongoose from 'mongoose';

const LikertAnswerSchema = new mongoose.Schema({
  questionId: String,
  responseText: String,
  responseValue: Number,
}, { _id: false });

const ForcedAnswerSchema = new mongoose.Schema({
  questionId: String,
  optionKey: String,
}, { _id: false });

const SJTAnswerSchema = new mongoose.Schema({
  questionId: String,
  optionKey: String,
}, { _id: false });

const PersonalityTestSchema = new mongoose.Schema({
  name: String,
  likertResponses: [LikertAnswerSchema],
  forcedResponses: [ForcedAnswerSchema],
  sjtResponses: [SJTAnswerSchema],
  timestamp: { type: Date, default: Date.now },
});

const PersonalityTest = mongoose.models.PersonalityTest || mongoose.model('PersonalityTest', PersonalityTestSchema);

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const { name, likertResponses, forcedResponses, sjtResponses } = body;

    console.log("📥 Saving Response:", body);

    const newResponse = new PersonalityTest({
      name,
      likertResponses,
      forcedResponses,
      sjtResponses,
    });

    await newResponse.save();

    return NextResponse.json({ success: true, message: "✅ Responses saved" });
  } catch (error) {
    console.error("❌ Save Error:", error);
    return NextResponse.json({ success: false, message: "❌ Failed to save responses" }, { status: 500 });
  }
}
