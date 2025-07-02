import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import mongoose from 'mongoose';

const Question = mongoose.models.Question || mongoose.model("Question", new mongoose.Schema({
  id: String,
  type: String,
  primaryTrait: String,
  text: String,
  formatWeight: Number,
  traitWeight: Number,
  sectionWeight: Number,
  reverse: Boolean,
  skills: [String],
  options: [{ label: String, value: Number }],
  answers: [{
    id: String, optionKey: String, text: String,
    scores: mongoose.Schema.Types.Mixed,
    baseScoreValue: Number,
  }],
}));

function createLikertAnswers(skills, reverse = false) {
  const scale = reverse ? { 1: 5, 2: 4, 3: 3, 4: 2, 5: 1 } : { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 };
  return Array.from({ length: 5 }, (_, i) => {
    const value = i + 1;
    const scores = {};
    skills.forEach(skill => { scores[skill] = scale[value]; });
    return {
      id: `likert-${value}`,
      value,
      scores,
      baseScoreValue: scale[value],
    };
  });
}

export async function GET() {
  await dbConnect();
  const questions = await Question.find({});
  const enriched = questions.map(q => {
    const obj = q.toObject();
    if (q.type === 'likert') {
      obj.answers = createLikertAnswers(q.skills, q.reverse);
    }
    return obj;
  });
  return NextResponse.json({ success: true, questions: enriched });
}
