import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import WeightManagement from "@/pages/WeightManagement";
import ImmigrationExam from "@/pages/ImmigrationExam";

export function render(path: string) {
  return renderToString(
    <StaticRouter location={path}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weight-management" element={<WeightManagement />} />
        <Route path="/immigration-exam" element={<ImmigrationExam />} />
      </Routes>
    </StaticRouter>,
  );
}
