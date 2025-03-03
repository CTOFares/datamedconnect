import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CVDataProvider } from "./Context/CVDataContext.jsx";

createRoot(document.getElementById("root")).render(
  <CVDataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CVDataProvider>
);
