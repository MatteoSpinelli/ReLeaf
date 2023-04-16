import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import themeReducer from "./slices/themeSlice";
import langReducer from "./slices/langSlice";
import menuState from "./slices/menuSlice";
import questionSlice from "./slices/questionSlice";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";

export const store = configureStore({
  reducer: { theme: themeReducer, lang: langReducer, isMenuVisible: menuState, questions: questionSlice },
  middleware: [thunk],
});
