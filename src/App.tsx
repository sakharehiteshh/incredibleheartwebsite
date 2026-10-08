import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import WeightManagement from "@/pages/WeightManagement";
import ImmigrationExam from "@/pages/ImmigrationExam";
import AboutUs from "@/pages/AboutUs";
import NotFound from "@/pages/NotFound";
import { FloatingDock } from "@/components/FloatingDock";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weight-management" element={<WeightManagement />} />
        <Route path="/immigrationexam" element={<ImmigrationExam />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FloatingDock />
    </BrowserRouter>
  );
}

export default App;
