import React, { useState } from "react";
import {
  Link,
  useParams,
  Outlet,
  useLocation,
  NavLink,
} from "react-router-dom";
import {
  Menu,
  Bell,
  User,
  LayoutPanelLeft,
  ScrollText,
  User2,
  Bookmark,
  ChartColumnIncreasing,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ShieldQuestion,
  BookUser,
  Link2,
  Search,
} from "lucide-react";
import { assets } from "../../assets/assets";
import { IoIosLink } from "react-icons/io";

const Layout = () => {
  const location = useLocation();
  console.log("Current path:", location.pathname);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const formatPageTitle = () => {
    const pathSegments = location.pathname.slice(1).split("/"); // Remove leading '/' and split by '/'
    const basePath = pathSegments[0] || "home"; // Take the first segment, default to "home" if empty
    return basePath
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Mock notification count for ScrollText (replace with actual data in a real app)
  const scrollTextNotifications = 5;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`text-white fixed h-full transition-all bg-[#173A6D] w-60 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-60"
        } md:translate-x-0 ${isSidebarExpanded ? "md:w-60" : "md:w-16"}`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="flex justify-center items-center p-4">
            <img
              src={isSidebarExpanded ? assets.logowhite : assets.Frame}
              className={`w-full ${
                isSidebarExpanded ? "max-w-[300px]" : "max-w-[40px]"
              }`}
              alt="logo"
            />
          </div>
          {/* Main Menu */}
          <ul className="space-y-2 py-6">
            <li>
              <NavLink
                to="/rechercher-un-consultant"
                className={({ isActive }) =>
                  `py-2 px-3 rounded flex gap-2 text-[16px] hover:opacity-100 hover:rounded-md ${
                    isActive ? "opacity-100" : "opacity-50"
                  } ${isSidebarExpanded ? "justify-start" : "justify-center"}`
                }
              >
                <Search size={20} />
                {isSidebarExpanded && <span>Rechercher Un Consultant</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demande-echange"
                className={({ isActive }) =>
                  `py-2 px-3 rounded flex gap-2 text-[16px] hover:opacity-100 hover:rounded-md ${
                    isActive ? "opacity-100" : "opacity-50"
                  } ${isSidebarExpanded ? "justify-start" : "justify-center"}`
                }
              >
                <div className="relative">
                  <ScrollText size={20} />
                  {scrollTextNotifications > 0 && (
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-[#02B2E1] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {scrollTextNotifications}
                    </div>
                  )}
                </div>
                {isSidebarExpanded && <span>Demande D'Echange</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/consultant-sauvegarde"
                className={({ isActive }) =>
                  `py-2 px-3 rounded flex gap-2 text-[16px] hover:opacity-100 hover:rounded-md ${
                    isActive ? "opacity-100" : "opacity-50"
                  } ${isSidebarExpanded ? "justify-start" : "justify-center"}`
                }
              >
                <Bookmark size={20} />
                {isSidebarExpanded && <span>Consultant Sauvegarder</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistique"
                className={({ isActive }) =>
                  `py-2 px-3 rounded flex gap-2 text-[16px] hover:opacity-100 hover:rounded-md ${
                    isActive ? "opacity-100" : "opacity-50"
                  } ${isSidebarExpanded ? "justify-start" : "justify-center"}`
                }
              >
                <ChartColumnIncreasing size={20} />
                {isSidebarExpanded && <span>Statistique</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Questions-frequentes"
                className={({ isActive }) =>
                  `py-2 px-3 rounded flex gap-2 hover:opacity-100 hover:rounded-md ${
                    isActive ? "opacity-100" : "opacity-50"
                  } ${isSidebarExpanded ? "justify-start" : "justify-center"}`
                }
              >
                <ShieldQuestion size={20} />
                {isSidebarExpanded && <span>Questions Frequentes</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactez-nous"
                className={({ isActive }) =>
                  `py-2 px-3 rounded flex gap-2 hover:opacity-100 hover:rounded-md ${
                    isActive ? "opacity-100" : "opacity-50"
                  } ${isSidebarExpanded ? "justify-start" : "justify-center"}`
                }
              >
                <BookUser size={20} />
                {isSidebarExpanded && <span>Contacter Nous</span>}
              </NavLink>
            </li>
          </ul>

          {/* Spacer */}
          <div className="flex-grow"></div>

          {/* Logout Section */}
          <ul className="pb-4">
            <li>
              <NavLink
                to="/integration"
                className={({ isActive }) =>
                  `py-2 px-4 rounded flex gap-4 hover:opacity-100 hover:rounded-md ${
                    isActive ? "opacity-100" : "opacity-50"
                  } ${isSidebarExpanded ? "justify-start" : "justify-center"}`
                }
              >
                <IoIosLink strokeWidth={1.75} size={20} />
                {isSidebarExpanded && <span>Integration</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `py-2 px-4 rounded flex gap-4 hover:opacity-100 hover:rounded-md ${
                    isActive ? "opacity-100" : "opacity-50"
                  } ${isSidebarExpanded ? "justify-start" : "justify-center"}`
                }
              >
                <LogOut strokeWidth={1.75} size={20} />
                {isSidebarExpanded && <span>Se Deconnecter</span>}
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col h-screen">
        {/* Fixed Header */}
        <header
          className={`bg-white p-4 flex justify-between border-b-2 items-center fixed top-0 right-0 left-0 ${
            isSidebarExpanded ? "md:ml-60" : "md:ml-16"
          }`}
        >
          <div className="py-2 px-4 flex justify-end">
            <button
              onClick={() => {
                if (window.innerWidth < 768) {
                  setIsSidebarOpen(!isSidebarOpen);
                } else {
                  setIsSidebarExpanded(!isSidebarExpanded);
                }
              }}
            >
              <Menu size={20} />
            </button>
          </div>
          <div className="flex gap-4">
            <Bell size={20} className="text-gray-600 cursor-pointer" />
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main
          className={`flex-1 overflow-auto p-4 mt-[4rem] h-full bg-[#fdfdfd] ${
            isSidebarExpanded ? "md:ml-60" : "md:ml-16"
          } border-2`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
