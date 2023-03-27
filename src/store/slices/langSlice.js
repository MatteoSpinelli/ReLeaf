import { createSlice } from "@reduxjs/toolkit";

const systemLang = navigator.language || navigator.userLanguage;
console.log(systemLang);

const currentLang = localStorage.getItem("lang") || systemLang;

const initialState = currentLang;

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
