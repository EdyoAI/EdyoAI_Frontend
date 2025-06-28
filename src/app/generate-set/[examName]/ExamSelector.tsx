'use client'
import { useState } from 'react';

interface Subject {
  name: string;
  topics: string[];
}

type ExamSelectorProps = {
  subjects: Subject[];
};

export default function ExamSelector({ subjects }: ExamSelectorProps) {
  const [selectedSubject, setSelectedSubject] = useState<string>(subjects[0]?.name || '');
  const [selectedTopic, setSelectedTopic] = useState<string>('');

  const handleGenerate = () => {
    if (!selectedSubject || !selectedTopic) {
      alert('Please select both subject and topic');
      return;
    }
    console.log('Generating questions for:', selectedSubject, selectedTopic);

    

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

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Generate Questions
      </button>
    </div>
  );
}
