import { useState } from "react";
import "./App.css";
import Constraction from "./Components/Constraction";
import AppRoutes from "./Routes/AppRoutes";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppRoutes />
      <SpeedInsights />
    </>
  );
}

export default App;
