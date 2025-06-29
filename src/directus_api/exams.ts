import { axios } from "./config";
import {get} from 'lodash'

async function getExams() {
    const resp = await axios.get('/items/exams',{
        params:{
            fields:["id","name","details", "banner"]
        }
    })

    return get(resp, 'data.data', [])
}



async function getExamsByName(name:string) {
    const resp = await axios.get('/items/exams',{
        params:{
            filter:{
                name:{
                    _eq:name
                }
            },
            fields:["subjects"]
        }
    })

    return get(resp, "data.data", [])

}


async function getExamQuestions(id:number){
    const resp = await axios.get('/items/testPapers',{
        params:{
            filter:{
                id:{
                    _eq:id
                }
            },
            fields:["questions","*"]
        }
    })

    return get(resp, 'data.data', [])
}

export {getExams, getExamsByName, getExamQuestions}
