import Cookies from "js-cookie"

export function useSignUp() {
  async function signUp(email: string, password: string, name = "", lastname = "") {
    const testResult: any = Cookies.get("testResult")
    try {
      const jwt = Cookies.get("jwt")
      const headers: { authorization?: string, "Content-Type": string } = jwt ? { authorization: `Bearer ${jwt}`, "Content-Type": "application/json" } : { "Content-Type": "application/json" }

      const res = await fetch(`${process.env.REACT_APP_SERVER_URI}/api/v1/auth/signup`, {
        method: "POST",
        mode: "cors",
        headers,
        body: JSON.stringify({
          email,
          password,
          name,
          lastname,
          testResult: JSON.parse(testResult),
        }),
      })

      const data = await res.json()

      if (data && data.success) {
        document.cookie = `jwt=${data.accessToken};expires=${data.exp};secure;sameSite=Strict;path=/;`
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
