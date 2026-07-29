import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import WeightManagement from "@/pages/WeightManagement";
import ImmigrationExam from "@/pages/ImmigrationExam";
import AboutUs from "@/pages/AboutUs";
import { FloatingDock } from "@/components/FloatingDock";

export function render(path: string) {
  return renderToString(
    <StaticRouter location={path}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weight-management" element={<WeightManagement />} />
        <Route path="/immigrationexam" element={<ImmigrationExam />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <FloatingDock />
    </StaticRouter>,
  );
}
