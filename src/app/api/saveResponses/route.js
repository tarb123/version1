import dbConnect from '@/utils/dbConnect';
import mongoose from 'mongoose';

const LikertAnswerSchema = new mongoose.Schema({
  questionId: String,
  responseText: String,
  responseValue: Number,
});
const ForcedAnswerSchema = new mongoose.Schema({
  questionId: String,
  optionKey: String,
});
const SJTAnswerSchema = new mongoose.Schema({
  questionId: String,
  optionKey: String,
});

const PersonalityTest = mongoose.models.PersonalityTest || mongoose.model("PersonalityTest", new mongoose.Schema({
  name: String,
  likertResponses: [LikertAnswerSchema],
  forcedResponses: [ForcedAnswerSchema],
  sjtResponses: [SJTAnswerSchema],
  timestamp: { type: Date, default: Date.now },
}));

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  
  console.log("📥 Incoming data:", req.body);
  const { name = "", likertResponses = [], forcedResponses = [], sjtResponses = [] } = body;

  const responseDoc = new PersonalityTest({
    name,
    likertResponses,
    forcedResponses,
    sjtResponses,
  });

  try {
    await responseDoc.save();
    return Response.json({ success: true, message: "✅ Responses saved" });
  } catch (error) {
    console.error("❌ Save error:", error);
    return Response.json({ success: false, message: "❌ Failed to save" }, { status: 500 });
  }
}