import { createSlice } from "@reduxjs/toolkit";

const systemLang: string = navigator.language;

const currentLang: string = localStorage.getItem("lang") || systemLang;

const initialState: string = currentLang;

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang: (state, action) => {
      localStorage.setItem("lang", action.payload);
      return action.payload;
    },
  },
});

export const { setLang } = langSlice.actions;

export default langSlice.reducer;
