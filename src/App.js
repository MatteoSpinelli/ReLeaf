import { Route, Routes } from "react-router-dom";
import TestPage from "./pages/TestPage";

import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
}

export default App;
