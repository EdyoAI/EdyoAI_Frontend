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
}

export {getExams, getExamsByName}
