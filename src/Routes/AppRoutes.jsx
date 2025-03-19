import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Consultant Pages
import Home from "../pages/consultant/Home/Home.jsx";
import Deposer from "../pages/consultant/Details/Details.jsx";
import VerificationEmail from "../pages/consultant/EmailVerif/VerificationEmail.jsx";
import Mission from "../pages/consultant/Mission/Mission.jsx";
import Profile from "../pages/consultant/Profile/Profile.jsx";

// Client Pages
import RechercherUnConsultant from "../pages/Client/RechercheConsultant/RechercheConsultant.jsx";
import DemandeDEchange from "../pages/Client/DemandeEchange/DemandeEchange.jsx";
import ConsultantSauvegarder from "../pages/Client/ConsultantSauvegarder/ConsultantSauvegarder.jsx";
import Statistique from "../pages/Client/Statistique/Statistique.jsx";
import ProfileConsultant from "../pages/Client/Profile/ProfileConsultant.jsx";

// Admin Pages
import Accueil from "../pages/Admin/Acceuil.jsx";
import Demandes from "../pages/Admin/Demandes.jsx";
import ConsultantAdmin from "../pages/Admin/ConsultantAdmin.jsx";

// Shared Utils and Policy Pages
import ScrollToTop from "../Utils/ScrollToTop.jsx";
import Thankyou from "../Utils/Thankyou.jsx";
import Policy from "../pages/Politique/Policy.jsx";
import Cookies from "../pages/Politique/Cookies.jsx";
import Mention from "../pages/Politique/Mention.jsx";
import Layout from "../pages/Client/Layout.jsx";
import ReserverCreneau from "../pages/Client/Profile/ReserverCreneau.jsx";
import Contact from "../pages/Client/Contact/Contact.jsx";
import LayoutAdmin from "../pages/Admin/LayoutAdmin.jsx";
import ConsultantProfile from "../pages/Admin/ConsultantProfile.jsx";
import DemandeDetails from "../pages/Admin/DemandeDetails.jsx";
import FrequentlyaskedQuestions from "../pages/Admin/FrequentlyaskedQuestions.jsx";
import QuestionFrequentes from "../pages/Client/QuestionFrequentes.jsx";

// Role-based route protection
const ProtectedRoute = ({ element, allowedRole, userRole }) => {
  return userRole === allowedRole ? element : <Navigate to="/" />;
};

const AppRoutes = () => {
  const userRole = "fares"; // Replace with actual authentication logic

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
        <Route element={<Layout />}>
          <Route
            path="/rechercher-un-consultant/"
            element={
              <ProtectedRoute
                element={<RechercherUnConsultant />}
                allowedRole="fares"
                userRole={userRole}
              />
            }
          />
          <Route
            path="/rechercher-un-consultant/:id"
            element={
              <ProtectedRoute
                element={<ProfileConsultant />}
                allowedRole="fares"
                userRole={userRole}
              />
            }
          />
          <Route
            path="/rechercher-un-consultant/:id/creneau"
            element={
              <ProtectedRoute
                element={<ReserverCreneau />}
                allowedRole="fares"
                userRole={userRole}
              />
            }
          />
          <Route
            path="/demande-echange"
            element={
              <ProtectedRoute
                element={<DemandeDEchange />}
                allowedRole="fares"
                userRole={userRole}
              />
            }
          />
          <Route
            path="/demande-echange/:id"
            element={
              <ProtectedRoute
                element={<ProfileConsultant />}
                allowedRole="fares"
                userRole={userRole}
              />
            }
          />
          <Route
            path="/demande-echange/:id/creneau"
            element={
              <ProtectedRoute
                element={<ProfileConsultant />}
                allowedRole="fares"
                userRole={userRole}
              />
            }
          />
          <Route
            path="/consultant-sauvegarde"
            element={
              <ProtectedRoute
                element={<ConsultantSauvegarder />}
                allowedRole="fares"
                userRole={userRole}
              />
            }
          />
          <Route
            path="/statistique"
            element={
              <ProtectedRoute
                element={<Statistique />}
                allowedRole="fares"
                userRole={userRole}
              />
            }
          />
          <Route
            path="/contactez-nous"
            element={
              <ProtectedRoute
                element={<Contact />}
                allowedRole="fares"
                userRole={userRole}
              />
            }
          />
          <Route
            path="/Questions-frequentes"
            element={
              <ProtectedRoute
                element={<QuestionFrequentes />}
                allowedRole="fares"
                userRole={userRole}
              />
            }
          />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route
            path="accueil" // Corrected spelling
            element={
              <ProtectedRoute
                element={<Accueil />}
                allowedRole="fares"
                userRole={userRole}
              />
            }
          />
          <Route
            path="demandes"
            element={
              <ProtectedRoute
                element={<Demandes />}
                allowedRole="fares"
                userRole={userRole}
              />
            }
          />
          <Route
            path="demandes/:id"
            element={
              <ProtectedRoute
                element={<DemandeDetails />}
                allowedRole="fares"
                userRole={userRole}
              />
            }
          />
          <Route
            path="consultant"
            element={
              <ProtectedRoute
                element={<ConsultantAdmin />}
                allowedRole="fares"
                userRole={userRole}
              />
            }
          />
          <Route
            path="consultant/:id"
            element={
              <ProtectedRoute
                element={<ConsultantProfile />}
                allowedRole="fares"
                userRole={userRole}
              />
            }
          />
          <Route
            path="Questions-frequentes"
            element={
              <ProtectedRoute
                element={<FrequentlyaskedQuestions />}
                allowedRole="fares"
                userRole={userRole}
              />
            }
          />
          <Route
            path="contactez-nous"
            element={
              <ProtectedRoute
                element={<Contact />}
                allowedRole="fares"
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
