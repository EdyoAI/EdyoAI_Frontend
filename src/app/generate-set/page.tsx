"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";


export default function GenerateSet() {
    const searchParams = useSearchParams();
    const examNameParam = searchParams.get("exam");
    const [examName, setExamName] = useState(examNameParam || "");
    const [subjectName, setSubjectName] = useState("");
    const [topicName, setTopicName] = useState("");
    const [numQuestions, setNumQuestions] = useState(1);

    // Subject and topic options based on exam
    const subjectOptions: Record<string, string[]> = {
      "ssc-gd": ["Math", "Current Affairs"],
      wbp: ["General Awareness", "Reasoning"],
      kp: ["General Studies", "English"],
      "rail-group-d": ["Science", "Math"],
    };

    const maxQuestionsPerExam: Record<string, number> = {
      "ssc-gd": 80,
      wbp: 85,
      kp: 85,
      "rail-group-d": 100,
    };
    const topicOptions: Record<string, Record<string, string[]>> = {
      "ssc-gd": {
        Math: ["Algebra", "Calculus"],
        "Current Affairs": ["National", "International"],
      },
      wbp: {
        "General Awareness": ["History", "Geography"],
        Reasoning: ["Verbal", "Non-Verbal"],
      },
      kp: {
        "General Studies": ["Polity", "Economy"],
        English: ["Grammar", "Comprehension"],
      },
      "rail-group-d": {
        Science: ["Physics", "Biology"],
        Math: ["Arithmetic", "Geometry"],
      },
    };

    const currentSubjects = examName ? subjectOptions[examName] || [] : [];
    const currentTopics = examName && subjectName ? (topicOptions[examName]?.[subjectName] || []) : [];

    return (
      <div className="flex justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // handle form submission here
          }}
          className="flex flex-col gap-4 w-[80vw] max-w-md"
        >
          {/* Exam Name */}
          <div>
            <label htmlFor="examName" className="block mb-1">
              Exam Name
            </label>
            <select
              id="examName"
              name="examName"
              required
              className="border rounded px-2 py-1 w-full"
              value={examName}
              onChange={e => {
                setExamName(e.target.value);
                setSubjectName("");
                setTopicName("");
              }}
            >
              <option value="" disabled>
                Select exam
              </option>
              <option value="ssc-gd">SSC-GD</option>
              <option value="wbp">WBP</option>
              <option value="kp">KP</option>
              <option value="rail-group-d">Rail Group D</option>
            </select>
          </div>

          {/* Subject Name */}
          <div>
            <label htmlFor="subjectName" className="block mb-1">
              Subject Name
            </label>
            <select
              id="subjectName"
              name="subjectName"
              required
              className="border rounded px-2 py-1 w-full"
              value={subjectName}
              onChange={e => {
                setSubjectName(e.target.value);
                setTopicName("");
              }}
              disabled={!examName}
            >
              <option value="" disabled>
                {examName ? "Select subject" : "Select exam first"}
              </option>
              {currentSubjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>

          {/* Topic Name */}
          <div>
            <label htmlFor="topicName" className="block mb-1">
              Topic Name
            </label>
            <select
              id="topicName"
              name="topicName"
              required
              className="border rounded px-2 py-1 w-full"
              value={topicName}
              onChange={e => setTopicName(e.target.value)}
              disabled={!subjectName}
            >
              <option value="" disabled>
                {subjectName ? "Select topic" : "Select subject first"}
              </option>
              {currentTopics.map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
          </div>

          {/* Number of Questions (Slider) */}
          <div>
            <label htmlFor="numQuestions" className="block mb-1">
              Number of Questions
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                id="numQuestions"
                name="numQuestions"
                min={1}
                max={examName ? maxQuestionsPerExam[examName] || 100 : 100}
                value={numQuestions}
                onChange={e => setNumQuestions(Number(e.target.value))}
                className="w-full accent-blue-600"
                disabled={!examName}
                required
              />
              <span className="min-w-[2.5rem] text-center font-semibold">{numQuestions}</span>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Generate Set
          </button>
        </form>
      </div>
    );
}
