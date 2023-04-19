import { createSlice } from "@reduxjs/toolkit";

const userState = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        add: (state, action) => action.payload,
        reset: () => null
    }
})

export default userState.reducer
export const { add, reset } = userState.actions