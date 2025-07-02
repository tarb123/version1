// src/app/api/candidate/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import mongoose from 'mongoose';

const PersonalityTestSchema = new mongoose.Schema({
  name: String,
  likertResponses: [],
  forcedResponses: [],
  sjtResponses: [],
  timestamp: Date,
});

const PersonalityTest = mongoose.models.PersonalityTest || mongoose.model('PersonalityTest', PersonalityTestSchema);

export async function GET() {
  try {
    await dbConnect();
    const candidates = await PersonalityTest.find({}, { name: 1, timestamp: 1, _id: 0 });
    return NextResponse.json(candidates);
  } catch (error) {
    console.error("❌ Error fetching candidates:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch candidates" }, { status: 500 });
  }
}
