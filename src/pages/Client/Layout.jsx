import React, { useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import { Menu, Bell, User } from "lucide-react";

const Layout = () => {
  const { page } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white w-64 p-4 fixed h-full transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0 md:static`}
      >
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" className="block p-2 rounded hover:bg-gray-700">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/settings" className="block p-2 rounded hover:bg-gray-700">
              Settings
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-semibold capitalize">{page || "Home"}</h1>
          <div className="flex gap-4">
            <Bell size={24} className="text-gray-600 cursor-pointer" />
            <User size={24} className="text-gray-600 cursor-pointer" />
          </div>
        </header>

        {/* Content */}
        <main className="p-4">
          <Outlet /> {/* 🔴 Add this to render nested routes */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
