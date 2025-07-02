import dbConnect from '@/utils/dbConnect';
import mongoose from 'mongoose';

const PersonalityTest = mongoose.models.PersonalityTest;

export async function GET() {
  await dbConnect();
  try {
    const allDocs = await PersonalityTest.find({});

    const likertFlat = allDocs.flatMap((doc) =>
      doc.likertResponses.map((resp) => ({
        type: "likert",
        questionId: resp.questionId,
        responseText: resp.responseText,
        responseValue: resp.responseValue,
      }))
    );

    const forcedFlat = allDocs.flatMap((doc) =>
      doc.forcedResponses.map((resp) => ({
        type: "forced",
        questionId: resp.questionId,
        optionKey: resp.optionKey,
      }))
    );

    const sjtFlat = allDocs.flatMap((doc) =>
      doc.sjtResponses.map((resp) => ({
        type: "sjt",
        questionId: resp.questionId,
        optionKey: resp.optionKey,
      }))
    );

    const full = [...likertFlat, ...forcedFlat, ...sjtFlat];
    const sorted = full.sort((a, b) => a.questionId.localeCompare(b.questionId));
    return Response.json(sorted);
  } catch (error) {
    console.error("❌ Fetch error:", error);
    return Response.json({ success: false, message: "❌ Failed to fetch" }, { status: 500 });
  }
}