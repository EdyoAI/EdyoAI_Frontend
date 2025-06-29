import { get } from "lodash";
import { axios } from "./config";
// userId:number, testPaperId:number, result:any
async function upsertResult() {
    const resp = await axios.post('/items/results',{
        userId:"22151da7-62d0-4568-9908-7856dfd2a5bf",
        testPaperId:25,
        result:{"data":"test"}
    })


    return get(resp, 'data.data', [])
}

export {upsertResult}