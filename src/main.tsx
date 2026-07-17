import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import App from "./App";
import "./styles.css";

const rootElement = document.getElementById("root")!;
const app = (
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);

// dist/index.html is statically prerendered at build time (see scripts/prerender.mjs)
// so search engines and AI crawlers get full HTML without running JS. In dev, #root
// starts empty, so fall back to a normal client render instead of hydrating.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
