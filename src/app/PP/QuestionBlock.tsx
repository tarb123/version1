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
  sectionA?: string[];   // ✅ ADD // ✅ accept arrays like ["Abilities"]
  sectionB?: string[];   // ✅ ADD // ✅ accept arrays like ["MotivationInterest"]
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

  // ✅ Special renderer for Shape-1 pattern (frontend-only)
  const renderShape1Pattern = () => {
    return (
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-3 border-2 border-black">
          {/* Row 1 */}
          <div className="w-14 h-14 flex items-center justify-center border border-black text-2xl">🟢</div>
          <div className="w-14 h-14 flex items-center justify-center border border-black text-2xl">🔺</div>
          <div className="w-14 h-14 flex items-center justify-center border border-black text-2xl">🟦</div>

          {/* Row 2 */}
          <div className="w-14 h-14 flex items-center justify-center border border-black text-2xl">🔺</div>
          <div className="w-14 h-14 flex items-center justify-center border border-black text-2xl">🟦</div>
          <div className="w-14 h-14 flex items-center justify-center border border-black text-2xl">🟢</div>

          {/* Row 3 */}
          <div className="w-14 h-14 flex items-center justify-center border border-black text-2xl">🟦</div>
          <div className="w-14 h-14 flex items-center justify-center border border-black text-2xl">🟢</div>
          <div className="w-14 h-14 flex items-center justify-center border border-black text-2xl"></div>
        </div>
      </div>
    );
  };
  // ✅ Frontend-only L-shape for shape2
const renderShape2LShape = () => {
  return (
    <div className="w-full flex justify-center ">
      <svg
        width="220"
        height="180"
        viewBox="0 0 220 180"
        className="block"
        aria-label="L-shape"
       >
        {/* ✅ Single continuous outer L stroke */}
        <path
          d="M40 10 L40 150 L200 150"
          fill="none"
          stroke="Red"
          strokeWidth="6"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>
    </div>
  );
};
// ✅ Frontend-only pattern for shape3
const renderShape3Pattern = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 border-2 border-black">
        {/* Row 1 */}
        <div className="w-16 h-16 flex items-center justify-center border border-black text-2xl">🟢</div>
        <div className="w-16 h-16 flex items-center justify-center border border-black text-2xl">🟢</div>

        {/* Row 2 */}
        <div className="w-16 h-16 flex items-center justify-center border border-black text-2xl">🟢</div>
        <div className="w-16 h-16 flex items-center justify-center border border-black text-2xl">🟦</div>
      </div>
    </div>
  );
};


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

      // case "forced":
      // case "sjt":
        // return answers?.map((answer) => (
        //   <label key={answer.id} className="answer-label block mb-2 cursor-pointer">
        //     <div className="flex flex-col">
        //       <div className="flex items-center gap-2">
        //         <input
        //           type="radio"
        //           name={`question-${questionId}`}
        //           value={answer.id}
        //           checked={selectedAnswerValue === answer.id}
        //           onChange={() => onAnswerChange(questionId, answer.id)}
        //         />
        //         <span className="text-xs font-medium">{answer.text}</span>
        //       </div>
        //       {/* ✅ Urdu below English when ON */}
        //       {showTranslation && answer.textTranslation && (
        //         <div
        //           className="text-sm text-right text-black font-bold animate-fadeInUp"
        //           dir="rtl"
        //           style={{ fontFamily: "Jameel Noori Nastaleeq" }}
        //         >
        //           {answer.textTranslation}
        //         </div>
        //       )}
        //     </div>
        //   </label>
        // ));
 case "forced":
case "sjt":
  if (questionId === "shape1") {
    const emojiByOptionKey: Record<string, string> = {
      A: "🟢",
      B: "🟦",
      C: "🔺",
    };

    return (
      <div className="flex flex-row gap-8 justify-center mt-2">
        {answers?.map((answer) => {
          const valueToStore = answer.optionKey;
          const emoji = emojiByOptionKey[answer.optionKey];

          return (
            <label
              key={valueToStore}
              className="cursor-pointer flex items-center gap-2"
            >
              {/* ✅ radio LEFT */}
              <input
                type="radio"
                name={`question-${questionId}`}
                value={valueToStore}
                checked={selectedAnswerValue === valueToStore}
                onChange={() => onAnswerChange(questionId, valueToStore)}
                className="w-3 h-4 accent-Blue"
              />

              {/* ✅ small emoji */}
              <div className="text-xl leading-none">
                {emoji}
              </div>
            </label>
          );
        })}
      </div>
    );
  }

  // ✅ Special case ONLY for shape3 (same UI as shape1)
if (questionId === "shape3") {
  const emojiByOptionKey: Record<string, string> = {
    A: "🟢",
    B: "🟦",
    C: "🔺", // ✅ correct
  };

  return (
    <div className="flex flex-row gap-8 justify-center mt-2">
      {answers?.map((answer) => {
        const valueToStore = answer.optionKey; // ✅ store optionKey
        const emoji = emojiByOptionKey[answer.optionKey];

        return (
          <label
            key={valueToStore}
            className="cursor-pointer flex items-center gap-2"
          >
            {/* ✅ radio LEFT side */}
            <input
              type="radio"
              name={`question-${questionId}`}
              value={valueToStore}
              checked={selectedAnswerValue === valueToStore}
              onChange={() => onAnswerChange(questionId, valueToStore)}
              className="w-4 h-4 accent-green1"
            />

            {/* ✅ small emoji */}
            <div className="text-2xl leading-none">
              {emoji}
            </div>
          </label>
        );
      })}
    </div>
  );
}


        // ✅ Default SJT/Forced rendering (your existing one)
        return answers?.map((answer) => {
          const valueToStore = answer.id || answer.optionKey;

          return (
            <label
              key={valueToStore}
              className="answer-label block mb-2 cursor-pointer"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`question-${questionId}`}
                    value={valueToStore}
                    checked={selectedAnswerValue === valueToStore}
                    onChange={() => onAnswerChange(questionId, valueToStore)}
                  />
                  <span className="text-xs font-medium">{answer.text}</span>
                </div>

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
          );
        });


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

              {/* ✅ Frontend Pattern for shape1 */}
      {questionId === "shape1" && renderShape1Pattern()}
      {questionId === "shape2" && renderShape2LShape()}
      {/* ✅ Frontend Pattern for shape3 */}
      {questionId === "shape3" && renderShape3Pattern()}

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