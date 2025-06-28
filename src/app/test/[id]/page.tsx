"use client";
import { Question } from "@/types/types";
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/store";

export default function Workspace() {
  const questions = useSelector((state:RootState) => state.questions.questions);
  console.log(questions);
  return (
    <div>
      <p>test</p>
    </div>
  );
}
