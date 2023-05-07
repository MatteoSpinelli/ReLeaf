import { useDispatch, useSelector } from "react-redux"
import { add, reset } from "../store/slices/userSlice"
import Cookies from "js-cookie"
import jwtDecode from "jwt-decode"

export function useUser() {
  const dispatch = useDispatch()
  const user = useSelector((state: any) => state.user)

  async function setUser() {
    const token = Cookies.get("jwt")
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
