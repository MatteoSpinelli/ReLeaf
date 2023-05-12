import { useUser } from "../hooks/useUser"
import { useEffect } from "react"

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  /* the prvider does not re render when navigate using useNavigate, need to refactorize */
  const [user, setUser] = useUser()
  useEffect(() => {
    const a = async () => {
      await setUser()
    }
    a()
  }, [])
  return <>{children}</>
}
