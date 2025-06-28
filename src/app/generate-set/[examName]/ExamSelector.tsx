'use client'
import { useState } from 'react';

interface Subject {
  name: string;
  topics: string[];
}

type ExamSelectorProps = {
  subjects: Subject[];
};

export default function ExamSelector({ subjects }: ExamSelectorProps,  examName: string) {
  const [selectedSubject, setSelectedSubject] = useState<string>(subjects[0]?.name || '');
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [mode, setMode] = useState<'evaluation' | 'improvisation'>('evaluation');
  const [numQuestions, setNumQuestions] = useState<number>(1);

  const handleGenerate = () => {
    if (!selectedSubject || !selectedTopic) {
      alert('Please select both subject and topic');
      return;
    }
    console.log('Generating questions for:', selectedSubject, selectedTopic);
    const body = {
      exam: examName,
      subject: selectedSubject,
      topic: selectedTopic,
      mode: mode,
      count: mode === 'evaluation' ? numQuestions : 1, // For improvisation, we can set count to 1 or any other logic
    }


    

    // you can call your question generation function here
  };

  const currentTopics = subjects.find(s => s.name === selectedSubject)?.topics || [];

  return (
    <div className="max-w-md mx-auto p-4 space-y-4 border rounded-xl shadow">
      {/* Subject Selector */}
      <div>
        <label className="block mb-1 font-medium">Select Subject</label>
        <select
          value={selectedSubject}
          onChange={e => {
            setSelectedSubject(e.target.value);
            setSelectedTopic(''); // Reset topic when subject changes
          }}
          className="w-full p-2 border rounded"
        >
          {subjects.map((subject, idx) => (
            <option key={idx} value={subject.name}>
              {subject.name}
            </option>
          ))}
        </select>
      </div>

      {/* Topic Selector */}
      <div>
        <label className="block mb-1 font-medium">Select Topic</label>
        <select
          value={selectedTopic}
          onChange={e => setSelectedTopic(e.target.value)}
          className="w-full p-2 border rounded"
          disabled={currentTopics.length === 0}
        >
          <option value="" disabled>
            {currentTopics.length ? 'Choose a topic' : 'No topics available'}
          </option>
          {currentTopics.map((topic, idx) => (
            <option key={idx} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>
      {/* Mode Selector */}
      <div>
        <label className="block mb-1 font-medium">Mode</label>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-1">
        <input
          type="radio"
          name="mode"
          value="evaluation"
          checked={mode === 'evaluation'}
          onChange={() => setMode('evaluation')}
        />
        Self Evaluation
          </label>
          <label className="flex items-center gap-1">
        <input
          type="radio"
          name="mode"
          value="improvisation"
          checked={mode === 'improvisation'}
          onChange={() => setMode('improvisation')}
        />
        Self Improvisation
          </label>
        </div>
      </div>

      {/* Number of Questions (only for Self Evaluation) */}
      {mode === 'evaluation' && (
        <div>
          <label className="block mb-1 font-medium">How many questions?</label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min={1}
              max={25}
              value={numQuestions}
              onChange={e => setNumQuestions(Number(e.target.value))}
              className="w-full"
            />
            <span className="min-w-[2rem] text-center">{numQuestions}</span>
          </div>
        </div>
      )}
      <button
        onClick={handleGenerate}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Generate Questions
      </button>
    </div>
  );
}
