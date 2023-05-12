import { Navigate, useLocation, Outlet } from "react-router-dom"
import { useUser } from "../../hooks/useUser"

/**
 * **Require Auth**
 *
 * Wrap all routes that require authentication with the **RequireAuth** route, it will prevent the user to access those routes.
 *
 * @example
 * // Usage Example
 * <Route element={<RequireAuth />}>
 *    <Route path="/personalArea" element={<PersonalArea />} />
 * </Route>
 *
 */
const RequireAuth = () => {
  const [user] = useUser()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/login"

  return user ? <Outlet /> : <Navigate to={from} state={{ from: location }} replace />
}

export { RequireAuth }
