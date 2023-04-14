import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TestResultPage from "./pages/TestResultPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/test-result" element={<TestResultPage />} />
    </Routes>
  );
}

export default App;
