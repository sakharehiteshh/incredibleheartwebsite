import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import WeightManagement from "@/pages/WeightManagement";
import ImmigrationExam from "@/pages/ImmigrationExam";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weight-management" element={<WeightManagement />} />
        <Route path="/immigration-exam" element={<ImmigrationExam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
