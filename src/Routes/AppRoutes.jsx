import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";
import VerificationEmail from "../pages/EmailVerif/VerificationEmail";
import ScrollToTop from "../Utils/ScrollToTop";
import Info from "../pages/Info/Info";
import Mission from "../pages/Mission/Mission";
import Lien from "../pages/Liens/Lien";

const AppRoutes = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Deposer" element={<Details />} />
        <Route path="/Verification" element={<VerificationEmail />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Liens" element={<Lien />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
