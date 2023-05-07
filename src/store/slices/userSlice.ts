import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"
import jwtDecode from "jwt-decode"

const jwt = Cookies.get("jwt")
const token: any = jwt && jwtDecode(jwt)
const initialState = token ? token.data : null

const userState = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action) => action.payload,
    reset: () => null,
  },
})

export default userState.reducer
export const { add, reset } = userState.actions
