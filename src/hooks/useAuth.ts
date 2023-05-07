import Cookies from "js-cookie"
import { useState } from "react"

interface AuthResponse {
  success: boolean;
  message: string;
  accessToken: string;
  iat: number;
  exp: number;
}

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)

  const login = async (email: string, password: string) => {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URI}/api/v1/auth/login`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    const data: AuthResponse = await res.json()
    if (data && data.success) {
      Cookies.set("jwt", data.accessToken, {
        expires: data.exp,
        secure: true,
        SameSite: "None",
      })
      setAuthenticated(true)
      return { success: true }
    } else {
      setAuthenticated(false)
      return { success: false, data }
    }
  }

  return { login, authenticated }
}
