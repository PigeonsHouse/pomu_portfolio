import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "./components";
import { App } from "./pages";

const root = document.getElementById("root")!;

createRoot(root).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
