
import questionsReducer from '@/features/questionSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    questions: questionsReducer
  }
})
