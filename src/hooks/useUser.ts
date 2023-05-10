import { useDispatch, useSelector } from "react-redux"
import { add, reset } from "../store/slices/userSlice"
import Cookies from "js-cookie"
import jwtDecode from "jwt-decode"

export function useUser() {
  const dispatch = useDispatch()
  const user = useSelector((state: any) => state.user)

  async function setUser() {
    const token = Cookies.get("jwt")
    /* const res = await fetch(process.env.REACT_APP_SERVER_URI + "/api/v1/auth/user", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    const resJ = await res.json()
    console.log(resJ) */
    if (token) {
      const decoded: { data: any } = jwtDecode(token)
      if (decoded) {
        dispatch(add(decoded?.data))
      }
      return true
    }
    dispatch(reset())
    return false
  }

  return [user, setUser]
}
