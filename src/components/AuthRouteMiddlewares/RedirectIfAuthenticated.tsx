import { useUser } from "../../hooks/useUser"
import { Navigate, Outlet, useLocation } from "react-router-dom"

/**
 * **Redirect If Authenticated**
 *
 * Wrap all routes that you want prevent the user to access
 * if authenticated with the **RedirectIfAuthenticated** route,
 * it will prevent the user to access those routes while authenticated.
 *
 * @example
 * // Usage Example
 * <Route element={<RedirectIfAuthenticated />}>
 *     <Route path="/login" element={<LoginPage />} />
 *     <Route path="/signup" element={<SignUpPage />} />
 * </Route>
 *
 */
const RedirectIfAuthenticated = () => {
  const [user] = useUser()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/personalArea"

  return !user ? <Outlet /> : <Navigate to={from} state={{ from: location }} replace />
}

export { RedirectIfAuthenticated }
