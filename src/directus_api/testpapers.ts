import { axios } from "./config";
import {difference, filter, find, get, head, map, sortBy} from "lodash"

async function get_user_attempted_test_papers() {
    const response = await axios.get('/users/me',{
        params:{
            fields:['attemptedTestPapers', 'email'],
        }
    })
    return (get(response, 'data.data.attemptedTestPapers', []))
}

async function  get_user_unattempted_test_paper(count:number) {
    const response = await axios.get('/items/testPapers',{
        params:{
            filter:{
                count:{
                    _eq: count
                }
            },
            fields:['*'],
            sort:['-date_created']
        }
    })
    const allTestPaperList = map(get(response, 'data.data', []), 'id')

    const userAttemptedTestpaperslist = await get_user_attempted_test_papers()

    const unAttemptedTestPapers = head(difference(allTestPaperList, userAttemptedTestpaperslist))

    const unAttemptedTestPapersDetails = find(get(response, 'data.data',[]) , {id: unAttemptedTestPapers})

    return unAttemptedTestPapersDetails

}

async function upsert_question_paper(questions:any, count:number, exam_name:string) {

    const exam_info = await axios.get('/items/exams',{
        params:{
            filter:{
                name:{
                    _eq:exam_name
                }
            },
            fields:['id']
        }
    })
    console.log(exam_info.data.data)
    const exam_id = get(head(get(exam_info, "data.data", [])) , "id", null)
    console.log(exam_id)
    if (exam_id === null) {
        throw new Error("Exam not found")
    }

    console.log(questions)

    const upsert_resp = await axios.post('/items/testPapers',{
        examId: exam_id,
        count: count,
        questions: JSON.parse(questions)
    })

    return get(upsert_resp, "data.data", [])
    // return upsert_resp

}

export { get_user_unattempted_test_paper, upsert_question_paper}