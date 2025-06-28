import { upsert_question_paper } from "@/directus_api/testpapers"
import axios from "axios"
import { get } from "lodash"

async function generate_AI_TestPaper(exam:string, topic:string, subject:string, count:number){
    const response = await axios.post(`${process.env.AI_API_URL}`,{
        "exam": exam,
        "topic": topic,
        "subject": subject,
        "num_qs": count
    })

    console.log(response.data)

    const generated_questions_from_ai = get(response, 'data', " ")
    console.log("generated questions", generated_questions_from_ai)
    // const upsert_resp = await upsert_question_paper(generated_questions_from_ai.generated_questions, count, exam)
    const resp = upsert_question_paper(generated_questions_from_ai.generated_questions, count, exam)
    // return (JSON.parse(generated_questions_from_ai.generated_questions))
    // return (get(upsert_resp, "data.data", []))
    return resp
}

export {generate_AI_TestPaper}