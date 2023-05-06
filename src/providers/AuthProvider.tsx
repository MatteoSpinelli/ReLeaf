import { useUser } from "../hooks/useUser"
import { useEffect } from "react"

interface AuthProviderProps {
  children: React.ReactNode
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useUser()
  useEffect(() => {
    const a = async () => {
      await setUser()
    }
    a()
  }, [])
  return <>{children}</>
}
