'use client';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';

type QuestionData = {
  question: string;
  options: string[];
  answer: string;
  difficulty: number;
};

type MCQSheetProps = {
  questions: QuestionData[];
  // onSubmitResult?: (score: number, total: number) => void;
};

const MCQSheet: React.FC<MCQSheetProps> = ({ questions}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIndex: number, option: string) => {
    if (!submitted) {
      const newAnswers = [...selectedAnswers];
      newAnswers[qIndex] = option;
      setSelectedAnswers(newAnswers);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const correctCount = questions.reduce((score, q, i) => {
      return selectedAnswers[i] === q.answer ? score + 1 : score;
    }, 0);

    // redirect("/")

    // Call API here
      //store to db
      //next redire ct to result page
    // onSubmitResult?.(correctCount, questions.length);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto bg-slate-50 rounded-md border border-slate-300 shadow">
      <h1 className="text-2xl font-bold text-slate-800 mb-4">MCQ Answer Sheet</h1>

      {questions.map((q, idx) => {
        const selected = selectedAnswers[idx];
        const isCorrect = selected === q.answer;

        return (
          <div key={idx} className="mb-6">
            <h2 className="text-lg font-semibold text-slate-700 mb-2">
              {idx + 1}. {q.question}
            </h2>
            <ul className="space-y-2">
              {q.options.map((option) => (
                <li
                  key={option}
                  onClick={() => handleSelect(idx, option)}
                  className={`p-2 border border-slate-200 text-black rounded cursor-pointer transition ${
                    selected === option
                      ? submitted
                        ? option === q.answer
                          ? 'bg-emerald-200 text-emerald-800'
                          : 'bg-rose-200 text-rose-800'
                        : 'bg-blue-100 text-blue-800'
                      : 'hover:bg-slate-100'
                  }`}
                >
                  {option}
                </li>
              ))}
            </ul>
            {submitted && (
              <p
                className={`mt-2 font-medium ${
                  isCorrect ? 'text-emerald-700' : 'text-rose-700'
                }`}
              >
                {isCorrect ? '✅ সঠিক উত্তর!' : `❌ ভুল। সঠিক উত্তর: ${q.answer}`}
              </p>
            )}
          </div>
        );
      })}

      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={selectedAnswers.includes(null)}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Submit All
        </button>
      )}

      {submitted && (
        <p className="mt-4 text-xl font-semibold text-slate-800">
          মোট স্কোর: {selectedAnswers.filter((a, i) => a === questions[i].answer).length} / {questions.length}
        </p>
      )}
    </div>
  );
};

export default MCQSheet;
