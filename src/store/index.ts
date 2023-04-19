import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import themeReducer from "./slices/themeSlice";
import langReducer from "./slices/langSlice";
import menuState from "./slices/menuSlice";
import questionSlice from "./slices/questionSlice";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: { theme: themeReducer, lang: langReducer, isMenuVisible: menuState, questions: questionSlice, user: userSlice },
  middleware: [thunk],
});
