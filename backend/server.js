import express from "express";
import mongoose from "mongoose";  
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect("mongodb://192.168.18.62:27017/sanjeeda")
    // .connect("mongodb://192.168.100.138:27017/sanjeeda")
  .then(() => console.log("✅ Connected to MongoDB: sanjeeda"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// --------------------- SCHEMAS ---------------------
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
  answers: [
    {
      id: String,
      optionKey: String,
      text: String,
      scores: mongoose.Schema.Types.Mixed,
      baseScoreValue: Number,
    },
  ],
});
const Question = mongoose.model("Question", QuestionSchema);

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

const PersonalityTestSchema = new mongoose.Schema({
  name: String,
  likertResponses: [LikertAnswerSchema],
  forcedResponses: [ForcedAnswerSchema],
  sjtResponses: [SJTAnswerSchema],
  timestamp: { type: Date, default: Date.now },
});
const PersonalityTest = mongoose.model(
  "PersonalityTest",
  PersonalityTestSchema
);

// const CareerSchema = new mongoose.Schema({
//   name: String,
//   traits: { type: Map, of: Number },
//   skills: { type: Map, of: Number },
// });
// export const Career = mongoose.model("Career", CareerSchema);

const createLikertAnswers = (baseSkills, reverse = false) => {
  const scaleMapping = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 };
  const reversedMapping = { 1: 5, 2: 4, 3: 3, 4: 2, 5: 1 };
  const mapping = reverse ? reversedMapping : scaleMapping;
  const answers = [];

  for (let i = 1; i <= 5; i++) {
    const mappedScoreValue = mapping[i];
    const scores = {};
    baseSkills.forEach((skill) => {
      scores[skill] = mappedScoreValue;
    });

    answers.push({
      id: `likert-${i}`,
      value: i,
      scores: scores,
      baseScoreValue: mappedScoreValue,
    });
  }

  return answers;
};

// --------------------- ROUTES ---------------------

app.get("/api/ping", (req, res) => {
  res.send("✅ Backend is alive");
});

app.post("/api/add-questions", async (req, res) => {
  try {
    const { questions } = req.body;

    if (!Array.isArray(questions) || questions.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No questions provided" });
    }

    await Question.insertMany(questions);
    res.status(200).json({ success: true, message: "✅ Questions added" });
  } catch (err) {
    console.error("❌ Error adding questions:", err);
    res.status(500).json({ success: false, message: "Failed to add questions" });
  }
});

app.get("/api/questions", async (req, res) => {
  try {
    const questions = await Question.find({});
    const enrichedQuestions = questions.map((q) => {
      if (q.type === "likert") {
        q = q.toObject();
        q.answers = createLikertAnswers(q.skills, q.reverse);
      }
      return q;
    });

    res.status(200).json({ success: true, questions: enrichedQuestions });
  } catch (err) {
    console.error("❌ Error fetching questions:", err);
    res.status(500).json({ success: false, message: "Failed to fetch questions" });
  }
});

app.get("/api/candidates", async (req, res) => {
  try {
    const all = await PersonalityTest.find({}, { name: 1, timestamp: 1, _id: 0 });
    res.status(200).json(all);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch names" });
  }
});

app.post("/api/saveResponses", async (req, res) => {
  try {
    console.log("📥 Incoming data:", req.body);
    const { name = "", likertResponses = [], forcedResponses = [], sjtResponses = [] } = req.body;

    const responseDoc = new PersonalityTest({
      name,
      likertResponses,
      forcedResponses,
      sjtResponses,
    });

    await responseDoc.save();

    res.status(200).json({ success: true, message: "Responses saved successfully" });
  } catch (error) {
    console.error("❌ Error saving responses:", error.message);
    if (error.errors) {
      for (const key in error.errors) {
        console.error(`🔍 Field error [${key}]:`, error.errors[key].message);
      }
    }
    res.status(500).json({ success: false, message: "Failed to save responses" });
  }
});

app.get("/api/get-responses", async (req, res) => {
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
    res.status(200).json(sorted);
  } catch (error) {
    console.error("❌ Error fetching responses:", error);
    res.status(500).json({ success: false, message: "Failed to fetch responses" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});