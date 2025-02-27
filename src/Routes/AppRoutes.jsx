import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";
import VerificationEmail from "../pages/EmailVerif/VerificationEmail";
import ScrollToTop from "../Utils/ScrollToTop";
import Mission from "../pages/Mission/Mission";
import Profile from "../pages/Profile/Profile";

const AppRoutes = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Deposer" element={<Details />} />
        <Route path="/Verification" element={<VerificationEmail />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
