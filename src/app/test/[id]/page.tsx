// "use client";
// import { Question } from "@/types/types";
// import { useSelector } from "react-redux";
// import type { RootState } from "@/lib/store";
import { getExamQuestions } from "@/directus_api/exams";

export default async function Workspace() {
  // const questions = useSelector((state:RootState) => state.questions.questions);
  // console.log(questions);
  const id =21
  const questions = (await getExamQuestions(id))
  console.log(questions)
  return (
    <div>
      <p>test</p>
    </div>
  );
}
