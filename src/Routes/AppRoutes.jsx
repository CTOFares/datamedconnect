import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Consultant Pages
import Home from "../pages/consultant/Home/Home";
import Deposer from "../pages/consultant/Details/Details"; // Renamed for clarity
import VerificationEmail from "../pages/consultant/EmailVerif/VerificationEmail";
import Mission from "../pages/consultant/Mission/Mission";
import Profile from "../pages/consultant/Profile/Profile";

// Client Pages (Assuming these exist or will be created)
import RechercherUnConsultant from "../pages/Client/RechercheConsultant/RechercheConsultant";
import DemandeDEchange from "../pages/Client/DemandeEchange/DemandeEchange";
import ConsultantSauvegarder from "../pages/Client/ConsultantSauvegarder/ConsultantSauvegarder";
import Statistique from "../pages/client/Statistique/Statistique";

// Admin Pages (Assuming these exist or will be created)
import Acceuil from "../pages/admin/Acceuil/Acceuil";
import Demandes from "../pages/admin/Demandes/Demandes";
import ConsultantAdmin from "../pages/admin/ConsultantAdmin/ConsultantAdmin";

// Shared Utils and Policy Pages
import ScrollToTop from "../Utils/ScrollToTop";
import Thankyou from "../Utils/Thankyou";
import Policy from "../pages/Politique/Policy";
import Cookies from "../pages/Politique/Cookies";
import Mention from "../pages/Politique/Mention";

// Role-based route protection component (example)
const ProtectedRoute = ({ element, allowedRole, userRole }) => {
  return userRole === allowedRole ? element : <Navigate to="/" />;
};

const AppRoutes = () => {
  // Placeholder for user role (e.g., from auth context or state)
  const userRole = "consultant"; // Replace with actual logic (e.g., from Redux, Context, or Auth)

  return (
    <div className="bg-[#FFFFFF]">
      <ScrollToTop />
      <Routes>
        {/* Consultant Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute
              element={<Home />}
              allowedRole="consultant"
              userRole={userRole}
            />
          }
        />
        <Route
          path="/Deposer"
          element={
            <ProtectedRoute
              element={<Deposer />}
              allowedRole="consultant"
              userRole={userRole}
            />
          }
        />
        <Route
          path="/verif"
          element={
            <ProtectedRoute
              element={<VerificationEmail />}
              allowedRole="consultant"
              userRole={userRole}
            />
          }
        />
        <Route
          path="/Mission"
          element={
            <ProtectedRoute
              element={<Mission />}
              allowedRole="consultant"
              userRole={userRole}
            />
          }
        />
        <Route
          path="/Profile"
          element={
            <ProtectedRoute
              element={<Profile />}
              allowedRole="consultant"
              userRole={userRole}
            />
          }
        />

        {/* Client Routes */}
        <Route
          path="/RechercherunConsultnat"
          element={
            <ProtectedRoute
              element={<RechercherUnConsultant />}
              allowedRole="client"
              userRole={userRole}
            />
          }
        />
        <Route
          path="/DemandeD'Echange"
          element={
            <ProtectedRoute
              element={<DemandeDEchange />}
              allowedRole="client"
              userRole={userRole}
            />
          }
        />
        <Route
          path="/Consultant Sauvegarder"
          element={
            <ProtectedRoute
              element={<ConsultantSauvegarder />}
              allowedRole="client"
              userRole={userRole}
            />
          }
        />
        <Route
          path="/Statistique"
          element={
            <ProtectedRoute
              element={<Statistique />}
              allowedRole="client"
              userRole={userRole}
            />
          }
        />

        {/* Admin Routes */}
        <Route
          path="/Acceuil"
          element={
            <ProtectedRoute
              element={<Acceuil />}
              allowedRole="admin"
              userRole={userRole}
            />
          }
        />
        <Route
          path="/Demandes"
          element={
            <ProtectedRoute
              element={<Demandes />}
              allowedRole="admin"
              userRole={userRole}
            />
          }
        />
        <Route
          path="/Consultant"
          element={
            <ProtectedRoute
              element={<ConsultantAdmin />}
              allowedRole="admin"
              userRole={userRole}
            />
          }
        />

        {/* Shared Routes (Accessible to All) */}
        <Route path="/Merci" element={<Thankyou />} />
        <Route path="/Politique" element={<Policy />} />
        <Route path="/Mentionlegales" element={<Mention />} />
        <Route path="/Cookies" element={<Cookies />} />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
