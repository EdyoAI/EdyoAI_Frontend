'use client'
import { Question } from "@/types/types";
import { useSelector } from "react-redux";

export default function Workspace() {

  return (
    <div>
      {useSelector((state: any) => state.questions)?.map((question: Question, i:number) => (
        <div key={i}>
          {question.question}
        </div>
      ))}
    </div>)


}
