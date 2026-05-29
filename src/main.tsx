import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";

// import.meta.env.BASE_URL = "/" in dev, "/CHWINSMockup/" on GitHub Pages.
// Telling BrowserRouter the basename lets routes match correctly under the
// repo-name subpath on GH Pages.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
