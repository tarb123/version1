import dbConnect from '@/utils/dbConnect';
import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  id: String,
  type: String,
  primaryTrait: String,
  text: String,
  formatWeight: Number,
  traitWeight: Number,
  sectionWeight: Number,
  reverse: Boolean,
  skills: [String],
  options: [
    {
      label: String,
      value: Number,
    },
  ],
});
const Question = mongoose.models.Question || mongoose.model("Question", QuestionSchema);

export async function POST(req) {
  await dbConnect();
  const { questions } = await req.json();

  if (!Array.isArray(questions) || questions.length === 0) {
    return Response.json({ success: false, message: "❌ No questions provided" }, { status: 400 });
  }

  try {
    await Question.insertMany(questions);
    return Response.json({ success: true, message: "✅ Questions added" });
  } catch (err) {
    console.error("❌ Error adding questions:", err);
    return Response.json({ success: false, message: "❌ Failed to add" }, { status: 500 });
  }
}