 import dbConnect from '@/utils/dbConnect';
import mongoose from 'mongoose';

const PersonalityTest = mongoose.models.PersonalityTest;

export async function GET() {
  await dbConnect();
  try {
    const all = await PersonalityTest.find({}, { name: 1, timestamp: 1, _id: 0 });
    return Response.json(all);
  } catch (err) {
    console.error("❌ Error fetching candidates:", err);
    return Response.json({ error: "❌ Failed to fetch names" }, { status: 500 });
  }
}
