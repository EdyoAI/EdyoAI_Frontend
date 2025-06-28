import { getExamQuestions } from "@/directus_api/exams";
import MCQQuestion from "./QuestionForm";

export default async function Workspace({ params }: { params: { id: string } }) {
  const { id } = params;
  const questions = (await getExamQuestions(parseInt(id)))[0].questions;
  console.log(questions);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Mock Test Workspace</h1>
        <p className="mt-2 text-white">
          Prepare for your upcoming exams with our curated set of multiple-choice questions. 
          Practice in a real-exam environment, improve your accuracy, and boost your confidence. 
          This interactive MCQ workspace is designed to help students excel in competitive and academic tests.
        </p>
        <p className="mt-1 text-slate-400 text-sm">
          Accurate answers, instant feedback, and performance tracking to help you learn smarter.
        </p>
      </div>

      <MCQQuestion questions={questions} />
    </div>
  );
}
