import { Dispatch, SliceCaseReducers, createSlice } from "@reduxjs/toolkit";

interface questionAnswer {
    currentQuestion: number,
    body: {
        country: number,
        source: string,
        answers: { questionId: number, value: number }[]
    }
}


const questionState = createSlice<questionAnswer, SliceCaseReducers<any>, string>({
    name: "questions",
    initialState: {
        currentQuestion: 0,
        body: {
            country: 62,
            source: "result1",
            answers: []
        }
    },
    reducers: {
        go: (state: any, action: any) => {
            const current = state.currentQuestion + action.payload
            return { ...state, currentQuestion: current < 0 ? 0 : current > 16 ? 16 : current }
        },
        addAnswer: (state, action) => {
            state.body.answers.push(action.payload)
        }
    }
})

export default questionState.reducer
export const { go, addAnswer } = questionState.actions