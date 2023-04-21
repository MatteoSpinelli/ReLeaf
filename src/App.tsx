import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TestResultPage from "./pages/TestResultPage";
import { Test } from "./components/Test/Test";
import AuthRoute from "./components/common/AuthRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <AuthRoute inverted>
            <LoginPage />
          </AuthRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <AuthRoute inverted>
            <SignUpPage />
          </AuthRoute>
        }
      />
      <Route path="/test-result" element={<TestResultPage />} />
      <Route
        path="/test"
        element={
          <AuthRoute inverted>
            <Test />
          </AuthRoute>
        }
      />
    </Routes>
  );
}

export default App;
