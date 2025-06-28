import { createSlice } from '@reduxjs/toolkit'
import { Question } from '@/types/types'

const questionSlice = createSlice({
    name: 'questions',
    initialState: [{question: 'demo question', options: ['a','b'], correctOptions: ["a"]
    }] as Question[],
    reducers: {
        questionAdded: (state, action: { payload: Question }) => {
            state.push(action.payload)
        }
    },
})

export const { questionAdded} = questionSlice.actions
export default questionSlice.reducer