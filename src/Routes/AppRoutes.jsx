import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";
import VerificationEmail from "../pages/EmailVerif/VerificationEmail";
import ScrollToTop from "../Utils/ScrollToTop";
import Mission from "../pages/Mission/Mission";
import Profile from "../pages/Profile/Profile";
import Policy from "../pages/Politique/Policy";
import Cookies from "../pages/Politique/Cookies";
import Mention from "../pages/Politique/Mention";
import Thankyou from "../Utils/Thankyou";

const AppRoutes = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Deposer" element={<Details />} />
        <Route path="/Verification" element={<VerificationEmail />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Merci" element={<Thankyou />} />
        <Route path="/Politique" element={<Policy />} />
        <Route path="/Mentionlegales" element={<Mention />} />
        <Route path="/Co  okies" element={<Cookies />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
