// src/app/api/add-questions/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import mongoose from 'mongoose';

// Schema
const QuestionSchema = new mongoose.Schema({
  id: String,
  type: String,
  primaryTrait: String,
  text: String,
  formatWeight: Number,
  traitWeight: Number,
  reverse: Boolean,
  skills: [String],
  options: [
    {
      label: String,
      value: Number,
    },
  ],
});

// Model
const Question = mongoose.models.Question || mongoose.model("Question", QuestionSchema);

// POST route handler
export async function POST(req) {
  await dbConnect();

  try {
    const { questions } = await req.json();

    if (!Array.isArray(questions) || questions.length === 0) {
      return NextResponse.json({ success: false, message: "❌ No questions provided" }, { status: 400 });
    }

    await Question.insertMany(questions);
    return NextResponse.json({ success: true, message: "✅ Questions added" });
  } catch (err) {
    console.error("❌ Error adding questions:", err);
    return NextResponse.json({ success: false, message: "❌ Failed to add" }, { status: 500 });
  }
}