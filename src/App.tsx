import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import TestResultPage from "./pages/TestResultPage"
import { Test } from "./components/Test/Test"
import { PersonalArea } from "./pages/PersonalArea"
import { RequireAuth, RedirectIfAuthenticated } from "./components/AuthRouteMiddlewares"
import Activities from "./pages/Activities"

function App() {
  return (
    <Routes>
      {/* Routes available to guests and authenticated users */}
      <Route path="/" element={<Home />} />
      <Route path="/test-result" element={<TestResultPage />} />
      <Route path="/activities" element={<Activities />} />

      {/* Routes available only to authenticated users */}
      <Route element={<RequireAuth />}>
        <Route path="/personalArea" element={<PersonalArea />} />
      </Route>

      {/* Routes available only to not authenticated users */}
      <Route element={<RedirectIfAuthenticated />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/test" element={<Test />} />
      </Route>
    </Routes>
  )
}

export default App
