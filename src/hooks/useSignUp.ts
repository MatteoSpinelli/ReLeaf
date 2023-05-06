import useSWR from "swr"
import { getCookie, setCookie } from "../utils/cookie"

export function useSignUp() {
  async function signUp(
    email: string,
    password: string,
    name = "",
    lastname = ""
  ) {
    const testResult: any = getCookie("testResult")
    console.log(JSON.parse(testResult))
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URI}/api/v1/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            name,
            lastname,
            testResult: JSON.parse(testResult),
          }),
        }
      )

      const data = await res.json()
      const dat = new Date(data.exp * 1000).toUTCString()
      console.log(dat)
      if (data && data.success) {
        document.cookie = `jwt=${data.accessToken};expires=${dat};secure;sameSite=Strict;path=/;`
        return { success: true }
      } else {
        return { success: false, data }
      }
    } catch {
      return { success: false }
    }
  }
  return {
    signUp,
  }
}
