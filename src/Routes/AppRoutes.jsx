import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Consultant Pages
import Home from "../pages/consultant/Home/Home";
import Deposer from "../pages/consultant/Details/Details";
import VerificationEmail from "../pages/consultant/EmailVerif/VerificationEmail";
import Mission from "../pages/consultant/Mission/Mission";
import Profile from "../pages/consultant/Profile/Profile";

// Client Pages
import RechercherUnConsultant from "../pages/Client/RechercheConsultant/RechercheConsultant";
import DemandeDEchange from "../pages/Client/DemandeEchange/DemandeEchange";
import ConsultantSauvegarder from "../pages/Client/ConsultantSauvegarder/ConsultantSauvegarder";
import Statistique from "../pages/Client/Statistique/Statistique";
import ProfileConsultant from "../pages/Client/Profile/ProfileConsultant";

// Admin Pages
import Acceuil from "../pages/admin/Acceuil/Acceuil";
import Demandes from "../pages/admin/Demandes/Demandes";
import ConsultantAdmin from "../pages/admin/ConsultantAdmin/ConsultantAdmin";

// Shared Utils and Policy Pages
import ScrollToTop from "../Utils/ScrollToTop";
import Thankyou from "../Utils/Thankyou";
import Policy from "../pages/Politique/Policy";
import Cookies from "../pages/Politique/Cookies";
import Mention from "../pages/Politique/Mention";
import Layout from "../pages/Client/Layout";
import ReserverCreneau from "../pages/Client/Profile/ReserverCreneau";
import Contact from "../pages/Client/Contact/Contact";

// Role-based route protection
const ProtectedRoute = ({ element, allowedRole, userRole }) => {
  return userRole === allowedRole ? element : <Navigate to="/" />;
};

const AppRoutes = () => {
  const userRole = "client"; // Replace with actual authentication logic

  return (
    <div className="bg-[#FFFFFF]">
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/deposer" element={<Deposer />} />
        <Route path="/verif" element={<VerificationEmail />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/merci" element={<Thankyou />} />
        <Route path="/politique" element={<Policy />} />
        <Route path="/mention-legales" element={<Mention />} />
        <Route path="/cookies" element={<Cookies />} />

        {/* Client Routes with Layout */}
        <Route
          element={<Layout />} // 🟢 Apply Layout Here
        >
          <Route
            path="/rechercher-un-consultant/"
            element={
              <ProtectedRoute
                element={<RechercherUnConsultant />}
                allowedRole="client"
                userRole={userRole}
              />
            }
          />
          <Route
            path="/rechercher-un-consultant/:id"
            element={
              <ProtectedRoute
                element={<ProfileConsultant />}
                allowedRole="client"
                userRole={userRole}
              />
            }
          />
          <Route
            path="/rechercher-un-consultant/:id/creneau"
            element={
              <ProtectedRoute
                element={<ReserverCreneau />}
                allowedRole="client"
                userRole={userRole}
              />
            }
          />
          <Route
            path="/demande-echange"
            element={
              <ProtectedRoute
                element={<DemandeDEchange />}
                allowedRole="client"
                userRole={userRole}
              />
            }
          />
          <Route
            path="/demande-echange/:id"
            element={
              <ProtectedRoute
                element={<ProfileConsultant />}
                allowedRole="client"
                userRole={userRole}
              />
            }
          />
          <Route
            path="/demande-echange/:id/creneau"
            element={
              <ProtectedRoute
                element={<ProfileConsultant />}
                allowedRole="client"
                userRole={userRole}
              />
            }
          />
          <Route
            path="/consultant-sauvegarde"
            element={
              <ProtectedRoute
                element={<ConsultantSauvegarder />}
                allowedRole="client"
                userRole={userRole}
              />
            }
          />
          <Route
            path="/statistique"
            element={
              <ProtectedRoute
                element={<Statistique />}
                allowedRole="client"
                userRole={userRole}
              />
            }
          />
           <Route
            path="/contactez-nous"
            element={
              <ProtectedRoute
                element={<Contact />}
                allowedRole="client"
                userRole={userRole}
              />
            }
          />
        </Route>


        {/* Admin Routes */}
        <Route path="/admin" element={<Layout />}>
          <Route
            path="acceuil"
            element={
              <ProtectedRoute
                element={<Acceuil />}
                allowedRole="admin"
                userRole={userRole}
              />
            }
          />
          <Route
            path="demandes"
            element={
              <ProtectedRoute
                element={<Demandes />}
                allowedRole="admin"
                userRole={userRole}
              />
            }
          />
          <Route
            path="consultant"
            element={
              <ProtectedRoute
                element={<ConsultantAdmin />}
                allowedRole="admin"
                userRole={userRole}
              />
            }
          />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
