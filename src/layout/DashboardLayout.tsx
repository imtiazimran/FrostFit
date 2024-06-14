import DashboardSidebar from "@/pages/Dashboard/DashboardSidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <DashboardSidebar />
      <div className="z-0  col-span-10">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
