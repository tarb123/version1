import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  id: String,
  type: String,
  primaryTrait: String,
  text: String,
  textTranslation: String, 
  formatWeight: Number, traitWeight: Number, sectionWeight: Number,
  sectionA: [String],   // ✅ accept arrays like ["Abilities"]
  sectionB: [String],   // ✅ accept arrays like ["MotivationInterest"]

  reverse: Boolean,
  skills: [String],
  options: [{ label: String, value: Number}],
  answers: [   // <-- you missed this earlier
    {
      id: String,
      optionKey: String,
      text: String,
      textTranslation: String,
      scores: mongoose.Schema.Types.Mixed,
      baseScoreValue: Number,
      primaryTraitOverride: String,
    },
  ],

});

const Question = mongoose.models.Question || mongoose.model("Question", QuestionSchema);

// POST route handler
export async function POST(req) {
  await dbConnect();

  try 
  {
    const { questions } = await req.json();

    if (!Array.isArray(questions) || questions.length === 0) 
    {
      return NextResponse.json({ success: false, message: "❌ No questions provided" }, { status: 400 });
    }

    await Question.insertMany(questions);
    return NextResponse.json({ success: true, message: "✅ Questions added" });
  } 
  catch (err) 
  {
    console.error("❌ Error adding questions:", err);
    return NextResponse.json({ success: false, message: "❌ Failed to add" }, { status: 500 });
  }
}