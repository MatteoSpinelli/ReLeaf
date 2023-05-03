import { useDispatch, useSelector } from "react-redux"
import { getCookie } from "../utils/cookie"
import { add } from "../store/slices/userSlice"

export function useUser() {
  const dispatch = useDispatch()
  const user = useSelector((state: any) => state.user)

  async function setUser() {
    const token = getCookie("jwt")
    if (token) {
      const res = await fetch(process.env.REACT_APP_SERVER_URI + "/api/v1/auth/user", {
        headers: { authorization: `Bearer ${token}` },
      })
      const user = await res.json()
      dispatch(add(user.data))
      return true
    }
    return false
  }

  return [user, setUser]
}
