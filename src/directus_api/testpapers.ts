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

export { get_user_attempted_test_papers, get_user_unattempted_test_paper}