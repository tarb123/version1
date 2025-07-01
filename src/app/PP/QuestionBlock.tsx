import React from 'react';
 
export type Option = {
  label: string;
  value: number;
};

export type Answer = {
  id: string;
  optionKey: string;
  text: string;
  scores: number;
  baseScoreValue: number;
};

export type QuestionData = {
  id: string;
  type: 'likert' | 'forced' | 'sjt';
  text: string;
  answers: Answer[]; // only for forced/sjt
  options?: Option[]; // only for likert
  reverse?: boolean;
  primaryTrait?: string;
  formatWeight?: number;
  traitWeight: number;
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
}: QuestionBlockProps) 

{
  const { id: questionId, type, text, answers } = questionData;

  const renderAnswers = () => {
    switch (type) {
      case 'likert':
        return (
          <div className="likert-scale">
            <span>Strongly Disagree</span>
 {questionData.options?.map((option) => (
            <label key={option.value} className="likert-label">
              <input
                type="radio"
                name={`question-${questionId}`}
                value={option.value}
                checked={selectedAnswerValue === option.value}
                onChange={() => onAnswerChange(questionId, option.value)}
              />
            </label>
          ))}

            {/* {scores.map((answer: Answer) => (
              <label key={answer.id} className="likert-label">
                <input type="radio" name={`question-${questionId}`}
                value={answer.value}
                checked={selectedAnswerValue === answer.value} 
                onChange={() => onAnswerChange(questionId, answer.value)}/>
              </label>
            ))} */}
            <span>Strongly Agree</span>
          </div>
        );
  
 case 'forced':
    case 'sjt':
      return answers?.map((answer) => (
        <label key={answer.id} className="answer-label">
          <input
            type="radio"
            name={`question-${questionId}`}
            value={answer.id}
            checked={selectedAnswerValue === answer.id}
            onChange={() => onAnswerChange(questionId, answer.id)}
          />
          {answer.text}
        </label>
      ));
    default:
      return <p>Unknown question type</p>;
    }
  };

  return (
    <div className="question-block">
      <p><strong>{questionIndex + 1}. {text}</strong></p>
      {renderAnswers()}
    </div>
  );
}
export default QuestionBlock;