import { createSlice } from "@reduxjs/toolkit";

const menuState = createSlice({
    name: "isMenuVisible",
    initialState: false,
    reducers: {
        toggle: (state, action) => !state
    }
})

export const { toggle } = menuState.actions;

export default menuState.reducer;