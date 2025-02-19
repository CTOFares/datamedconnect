import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";
// import ScrollToTop from "../Utils/ScrollToTop";

const AppRoutes = () => {
  return (
    <div>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Deposer" element={<Details />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
