import { createSlice } from "@reduxjs/toolkit";

const menuState = createSlice({
    name: "isMenuVisible",
    initialState: false,
    reducers: {
        toggle: (state, action) => !state,
        setTrue: () => true
    }
})

export const { toggle, setTrue } = menuState.actions;

export default menuState.reducer;