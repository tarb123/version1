import React from "react";

export type Option = {
  label: string;
  value: number;
  textTranslation?: string;
};

export type Answer = {
  primaryTraitOverride: string | undefined;
  traitScores: string;
  id: string;
  optionKey: string;
  text: string;
  textTranslation?: string;
  scores: number;
  baseScoreValue: number;
};

export type QuestionData = {
  id: string;
  type: "likert" | "forced" | "sjt" | "text" | "select";
  text: string;
  textTranslation?: string;
  answers?: Answer[];
  options?: Option[];
  reverse?: boolean;
  primaryTrait?: string;
  formatWeight?: number;
  traitWeight?: number;
  sectionWeight?: number;
  skills?: string[];
};

type QuestionBlockProps = {
  questionData: QuestionData;
  questionIndex: number;
  selectedAnswerValue: string | number;
  onAnswerChange: (questionId: string, answerValue: string | number) => void;
};

function QuestionBlock({
  questionData,
  questionIndex,
  selectedAnswerValue,
  onAnswerChange,
}: QuestionBlockProps) {
  const { id: questionId, type, text, answers } = questionData;

  const [showTranslation, setShowTranslation] = React.useState(false); // 🔹 Urdu off by default

  const renderAnswers = () => {
    switch (type) {
      case "likert":
        return (
          <div className="likert-scale flex items-center justify-between">
            <span className="text-xs">Strongly Disagree</span>
            {questionData.options?.map((option) => (
              <label
                key={option.value}
                className="likert-label flex flex-col items-center text-center mx-1"
              >
                <input
                  type="radio"
                  name={`question-${questionId}`}

                  checked={selectedAnswerValue === option.value}
                  onChange={() => onAnswerChange(questionId, option.value)}
                />
                {/* ✅ Urdu text appears when toggle is ON */}
                {showTranslation && option.textTranslation && (
                  <span
                    className="text-xs text-black font-bold animate-fadeInUp"
                    dir="rtl"
                    style={{ fontFamily: "Jameel Noori Nastaleeq" }}
                  >
                    {option.textTranslation}
                  </span>
                )}
              </label>
            ))}
            <span className="text-xs">Strongly Agree</span>
          </div>
        );

      case "forced":
      case "sjt":
        return answers?.map((answer) => (
          <label key={answer.id} className="answer-label block mb-2 cursor-pointer">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`question-${questionId}`}
                  value={answer.id}
                  checked={selectedAnswerValue === answer.id}
                  onChange={() => onAnswerChange(questionId, answer.id)}
                />
                <span className="text-xs font-medium">{answer.text}</span>
              </div>
              {/* ✅ Urdu below English when ON */}
              {showTranslation && answer.textTranslation && (
                <div
                  className="text-sm text-right text-black font-bold animate-fadeInUp"
                  dir="rtl"
                  style={{ fontFamily: "Jameel Noori Nastaleeq" }}
                >
                  {answer.textTranslation}
                </div>
              )}
            </div>
          </label>
        ));

      case "text":
        return (
          <input
            type="text"
            placeholder={text}
            value={String(selectedAnswerValue || "")}
            onChange={(e) => onAnswerChange(questionId, e.target.value)}
            className="w-full border border-gray px-3 py-2 text-xs"
          />
        );

      case "select":
        return (
          <select
            value={String(selectedAnswerValue || "")}
            onChange={(e) => onAnswerChange(questionId, e.target.value)}
            className="w-full border border-gray px-3 py-2 text-xs"
          >
            <option value="">Select...</option>
            {questionData.options?.map((option) => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        );

      default:
        return <p>Unknown question type</p>;
    }
  };

  return (
    <div className="mb-4">
      {/* ✅ Toggle Button */}
      <div className="flex items-center mb-2">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={showTranslation}
            onChange={() => setShowTranslation((prev) => !prev)}
          />
          <div
            className="relative w-11 h-6 bg-green1 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray2 rounded-full peer
             dark:bg-gray peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] 
             after:start-[2px] after:bg-white after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
             peer-checked:bg-gradient-to-r from-[#00838F] to-pink"
          ></div>
          <span className="ms-2 text-black text-xs font-bold">
            {showTranslation ? "اردو" : "English"}
          </span>
        </label>
      </div>
 


      {/* ✅ Question Text */}
      <div>
        <h6 className="text-sm font-semibold mb-1">
          {questionIndex + 1}. {text}
        </h6>

        {showTranslation && questionData.textTranslation && (
          <h6
            className="text-sm font-semibold mb-1 text-right text-black animate-fadeInUp"
            dir="rtl"
            style={{ fontFamily: "Jameel Noori Nastaleeq" }}
          >
            {questionData.textTranslation}
          </h6>
        )}
      </div>

      {renderAnswers()}
    </div>
  );
}

export default QuestionBlock;
