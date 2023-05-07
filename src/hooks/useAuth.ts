import { useState } from "react"

interface AuthResponse {
  success: boolean;
  message: string;
  accessToken: string;
}

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URI}/api/v1/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      const data: AuthResponse = await res.json()
      if (data && data.success) {
        setAuthenticated(true)
        return { success: true }
      } else {
        setAuthenticated(false)
        return { success: false, data }
      }
    } catch (error) {
      return { success: false, message: JSON.stringify(error) }
    }
  }

  return { login, authenticated }
}
