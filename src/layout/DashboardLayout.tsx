import { useState } from "react";
import DashboardSidebar from "@/pages/Dashboard/DashboardSidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="grid grid-cols-12">
      <button
        className="block lg:hidden p-2 bg-gray-800 text-white"
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <div className={`lg:col-span-2 ${isSidebarOpen ? "col-span-12" : "hidden lg:block"}`}>
        <DashboardSidebar closeSidebar={() => setIsSidebarOpen(false)} />
      </div>
      <div className="z-0 col-span-12 lg:col-span-10">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
