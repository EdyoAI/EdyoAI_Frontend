import { getExamsByName } from "@/directus_api/exams";

export default async function generateExamSet({ params }: { params: { examName: string } }) {
    const {examName} = await params

    const examDetails = await getExamsByName(examName)
    console.log(examDetails)
  return (
    <div>
      Test has to be generated for per user
    </div>
  );
}
