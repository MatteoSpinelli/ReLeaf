import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import TestResultPage from "./pages/TestResultPage"
import { Test } from "./components/Test/Test"
import AuthRoute from "./components/common/AuthRoute"
import { PersonalArea } from "./pages/PersonalArea"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personalArea" element={
          <AuthRoute fallback="/login">
            <PersonalArea />
          </AuthRoute>
        } />
      <Route
        path="/login"
        element={
          <AuthRoute inverted fallback="/personalArea">
            <LoginPage />
          </AuthRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <AuthRoute inverted fallback="/personalArea">
            <SignUpPage />
          </AuthRoute>
        }
      />
      <Route path="/test-result" element={<TestResultPage />} />
      <Route
        path="/test"
        element={
          <AuthRoute inverted fallback="/personalArea">
            <Test />
          </AuthRoute>
        }
      />
    </Routes>
  )
}

export default App
