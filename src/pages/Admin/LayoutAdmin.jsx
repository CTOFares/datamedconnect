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
} from "lucide-react";
import { assets } from "../../assets/assets";

const LayoutAdmin = () => {
  const { page } = useParams();
  const location = useLocation();
  console.log("Params page:", page);
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

  // Mock notification counts (replace with actual data in a real app)
  const userNotifications = 3; // For <User />
  const scrollTextNotifications = 5; // For <ScrollText />

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`text-white fixed h-full transition-all bg-[#173A6D] w-60 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0 ${isSidebarExpanded ? "md:w-60" : "md:w-16"}`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="flex justify-center items-center p-4">
            <img
              src={isSidebarExpanded ? assets.logowhite : assets.Frame}
              className="w-full max-w-[300px]"
              alt="logo"
            />
          </div>
          {/* Main Menu */}
          <ul className="space-y-2 py-6">
            <li>
              <NavLink
                to="/admin/accueil"
                className={({ isActive }) =>
                  `py-2 px-3 rounded flex gap-2 text-[16px] hover:opacity-100 hover:rounded-md ${
                    isActive ? "opacity-100" : "opacity-50"
                  } ${isSidebarExpanded ? "justify-start" : "justify-center"}`
                }
              >
                <LayoutPanelLeft size={20} />
                {isSidebarExpanded && <span>Acceuil</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/demandes"
                className={({ isActive }) =>
                  `py-2 px-3 rounded flex gap-2 text-[16px] hover:opacity-100 hover:rounded-md ${
                    isActive ? "opacity-100" : "opacity-50"
                  } ${isSidebarExpanded ? "justify-start" : "justify-center"}`
                }
              >
                {/* Wrap ScrollText in a relative container */}
                <div className="relative">
                  <ScrollText size={20} />
                  {scrollTextNotifications > 0 && (
                    <div className="absolute -top-1 -right-1 bg-[#02B2E1] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {scrollTextNotifications}
                    </div>
                  )}
                </div>
                {isSidebarExpanded && <span>Demandes</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/consultant"
                className={({ isActive }) =>
                  `py-2 px-3 rounded flex gap-2 text-[16px] hover:opacity-100 hover:rounded-md ${
                    isActive ? "opacity-100" : "opacity-50"
                  } ${isSidebarExpanded ? "justify-start" : "justify-center"}`
                }
              >
                {/* Wrap User in a relative container */}
                <div className="relative">
                  <User size={20} />
                  {userNotifications > 0 && (
                    <div className="absolute -top-1 -right-1 bg-[#02B2E1] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {userNotifications}
                    </div>
                  )}
                </div>
                {isSidebarExpanded && <span>Consultants</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/contactez-nous"
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
            <li>
              <NavLink
                to="/admin/Questions-frequentes"
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
          </ul>

          {/* Spacer */}
          <div className="flex-grow"></div>

          {/* Logout Section */}
          <ul className="pb-4">
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
          className={`bg-white p-4 flex justify-between border-b-2 items-center fixed top-0 ${
            isSidebarExpanded
              ? "left-60 w-[calc(100%-15rem)]"
              : "left-16 w-[calc(100%-4rem)]"
          } right-0`}
        >
          <div className="py-2 px-4 flex justify-end">
            <button onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}>
              <Menu size={20} />
            </button>
          </div>
          <div className="flex gap-4">
            <Bell size={20} className="text-gray-600 cursor-pointer" />
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main
          className={`flex-1 overflow-y-auto overflow-visible p-4 mt-[4rem] h-full bg-[#fdfdfd] ${
            isSidebarExpanded ? "md:ml-60" : "md:ml-16"
          } border-2`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutAdmin;