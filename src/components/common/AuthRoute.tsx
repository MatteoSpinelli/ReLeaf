import { Navigate, Route } from "react-router-dom"
import { useUser } from "../../hooks/useUser"

interface AuthRouteProps {
  children: React.ReactElement;
  fallback?: string;
  inverted?: boolean;
}

export default function AuthRoute({ children, fallback = "/", inverted = false }: AuthRouteProps) {
  const [user] = useUser()

  if (!inverted) {
    if (user) {
      return children
    }
    return <Navigate to={fallback} />
  } else {
    if (user) {
      return <Navigate to={fallback} />
    }
    return children
  }
}
