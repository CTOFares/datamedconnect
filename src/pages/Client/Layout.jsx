import React, { useState } from "react";
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import {
  Menu,
  Bell,
  User,
  LayoutPanelLeft,
  ScrollText,
  User2,
  Bookmark,
  ChartColumnIncreasing,
} from "lucide-react";
import { assets } from "../../assets/assets";
const Layout = () => {
  const { page } = useParams();
  const location = useLocation(); // Added to get the current path
  console.log("Params page:", page); // Debug
  console.log("Current path:", location.pathname); // De
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to format the path into a title
  const formatPageTitle = () => {
    // Get the path and remove the leading slash
    const path = location.pathname.slice(1);

    // If path is empty, return "Home"
    if (!path) return "Home";

    // Replace hyphens with spaces and capitalize each word
    return path
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={` text-white md:w-60 sm:w-64 lg:w-60 fixed h-full transition-transform bg-[#173A6D] ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0`}
      >
        <div>
          <img src={assets.logowhite} className="p-4" alt="logo white" />
        </div>
        <ul className="space-y-2 py-6">
          <li>
            <Link
              to="/rechercher-un-consultant"
              className="py-2 px-3 rounded flex gap-4 text-[14px] hover:bg-gray-400 hover:rounded-md"
            >
              <LayoutPanelLeft size={20} />
              Rechercher Un Consultant
            </Link>
          </li>
          <li>
            <Link
              to="/demande-echange"
              className="py-2 px-3 rounded flex gap-4 text-[14px] hover:bg-gray-400 hover:rounded-md"
            >
              <ScrollText size={20} />
              Demande D'Echange
            </Link>
          </li>
          <li>
            <Link
              to="/consultant-sauvegarde"
              className="py-2 px-3 rounded flex gap-4 text-[14px] hover:bg-gray-400 hover:rounded-md"
            >
              <Bookmark size={20} />
              Consultant Sauvegarder
            </Link>
          </li>
          <li>
            <Link
              to="/statistique"
              className="py-2 px-4 rounded flex gap-4 text-[14px] hover:bg-gray-400 hover:rounded-md"
            >
              <ChartColumnIncreasing size={20} />
              Statistique
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="py-2  px-4 rounded flex gap-4 hover:bg-gray-400 hover:rounded-md"
            >
              <User2 />
              Contacter Nous
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col h-screen">
        {/* Fixed Header */}
        <header className="bg-white p-4 flex justify-between items-center fixed top-0 w-[calc(100%-15rem)] left-60">
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu size={18} />
          </button>
          <h1 className="text-[20px] leading-[38px] text-[#324DA9] font-montserrat font-normal">
            {formatPageTitle()}
          </h1>
          <div className="flex gap-4">
            <Bell size={18} className="text-gray-600 cursor-pointer" />
            <User size={18} className="text-gray-600 cursor-pointer" />
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto p-4 mt-[4rem] mb-4 bg-[#feeded] ml-60 border-2">
          <Outlet />
        </main>

        {/* Fixed Footer */}
        <footer className="bg-white border-2  p-4 flex justify-between items-center fixed bottom-0 w-[calc(100%-15rem)] left-60 z-10">
          <div className="flex gap-4">
            <p className="text-[14px] text-[#565758] font-montserrat font-normal">
              © 2025 DATAMED Consulting
            </p>

            <p className="text-[14px] text-[#173A6D] font-montserrat font-normal">
              2025/08/12 •
            </p>
            <p className="text-[14px] text-[#173A6D] font-montserrat font-normal">
              16:45 (GMT+1)
            </p>
          </div>
          <div className="flex gap-5">
            <p className="text-[14px] text-[#173A6D] font-montserrat font-normal">
              Help center
            </p>
            <p className="text-[14px] text-[#173A6D] font-montserrat font-normal">
              •
            </p>
            <p className="text-[14px] text-[#173A6D] font-montserrat font-normal">
              Terms of use
            </p>
            <p className="text-[14px] text-[#173A6D] font-montserrat font-normal">
              •
            </p>

            <p className="text-[14px] text-[#173A6D] font-montserrat font-normal">
              Privacy policy
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
