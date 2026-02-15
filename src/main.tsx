import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import router from "./router";
import "./styles/global.scss";

// Handle GitHub Pages 404 redirect for client-side routing
const params = new URLSearchParams(window.location.search);
const redirect = params.get("redirect");
if (redirect) {
  const basePath = "/ian-greenough-developer-portfolio";
  const cleanPath = redirect.startsWith(basePath)
    ? redirect.slice(basePath.length)
    : redirect;
  window.history.replaceState(null, "", basePath + cleanPath);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
