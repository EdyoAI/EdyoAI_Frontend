import { getExamsByName } from "@/directus_api/exams";
import ExamSelector from "./ExamSelector";

export default async function generateExamSet({
  params,
}: {
  params: { examName: string };
}) {
  const { examName } = await params;

  const examDetails = (await getExamsByName(examName))[0].subjects || null;
  console.log(examDetails);
  return (
    <>
      {examDetails ? (
        <div className="space-y-6 max-w-2xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-semibold text-blue-700">
            Generate a Personalized Test for "{examName}"
          </h1>

          <p className="text-white leading-relaxed">
            Select a subject and topic from the dropdowns below to build your
            own custom test. This helps you focus on the areas that matter most.
          </p>

          <p className="text-white leading-relaxed">
            When you're ready, click the{" "}
            <span className="font-semibold text-blue-700">
              "Generate Questions"
            </span>{" "}
            button to get an AI-generated paper tailored to your selection.
          </p>

          <div className="pt-4">
            <ExamSelector subjects={examDetails} examName={examName} />
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-400 py-12 m-auto" style={{ width: "80vw", maxWidth: 300 }}>
          <h2 className="text-2xl font-semibold mb-2">No Questions Available</h2>
          <p>
            Sorry, we don't have any questions for this exam right now. Please check back later or try selecting a different exam.
          </p>
        </div>
      )}
    </>
  );
}
