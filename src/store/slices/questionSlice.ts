import { SliceCaseReducers, createSlice } from "@reduxjs/toolkit"

interface questionAnswer {
  currentQuestion: number;
  body: {
    country: number,
    source: string,
    answers: { questionId: number, value: number }[],
  };
}

const questionState = createSlice<questionAnswer, SliceCaseReducers<any>, string>({
  name: "questions",
  initialState: {
    currentQuestion: 0,
    body: {
      country: 62,
      source: "result1",
      answers: [
        { questionId: 1, value: 30 },
        { questionId: 7, value: 30 },
        { questionId: 18, value: 100 },
        { questionId: 20, value: 100 },
        { questionId: 19, value: 900 },
        { questionId: 22, value: 2 },
        { questionId: 23, value: 10 },
        { questionId: 24, value: 30 },
        { questionId: 21, value: 12 },
        { questionId: 10, value: 30 },
        { questionId: 25, value: 133 },
        { questionId: 26, value: 3 },
        { questionId: 27, value: 34 },
        { questionId: 28, value: 45 },
        { questionId: 29, value: 60 },
        { questionId: 30, value: 21 },
        { questionId: 33, value: 6 },
      ],
    },
  },
  reducers: {
    go: (state: any, action: any) => {
      const current = state.currentQuestion + action.payload
      return { ...state, currentQuestion: current < 0 ? 0 : current > 16 ? 16 : current }
    },
    setValue: (state, action) => {
      state.body.answers[state.currentQuestion] = action.payload
    },
  },
})

export default questionState.reducer
export const { go, setValue } = questionState.actions
