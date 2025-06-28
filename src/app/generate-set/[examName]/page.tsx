import { getExamsByName } from "@/directus_api/exams";
import ExamSelector from "./ExamSelector";

export default async function generateExamSet({ params }: { params: { examName: string } }) {
    const {examName} = await params

    const examDetails = (await getExamsByName(examName))[0].subjects
    console.log(examDetails)
  return (
<div className="space-y-6 max-w-2xl mx-auto px-4 py-8">
  <h1 className="text-3xl font-semibold text-blue-700">
    Generate a Personalized Test for "{examName}"
  </h1>

  <p className="text-slate-700 leading-relaxed">
    Select a subject and topic from the dropdowns below to build your own custom test. This helps you focus on the areas that matter most.
  </p>

  <p className="text-slate-700 leading-relaxed">
    When you're ready, click the <span className="font-semibold text-blue-700">"Generate Questions"</span> button to get an AI-generated paper tailored to your selection.
  </p>

  <div className="pt-4">
    <ExamSelector subjects={examDetails} />
  </div>
</div>


  
  );
}
