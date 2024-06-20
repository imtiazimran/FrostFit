import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { FC } from "react";

interface DashboardSidebarProps {
  closeSidebar: () => void;
}
const DashboardSidebar : FC<DashboardSidebarProps> = ({ closeSidebar }) => {
  return (
    <Card className="overflow-auto p-4 lg:p-5 bg-light-gray h-screen lg:col-span-2 sticky top-0 left-0 shadow-lg">
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/dashboard/home"
          className={({ isActive }) =>
            cn("p-2 rounded-lg hover:bg-gray-100", {
              "bg-secondary ": isActive,
            })
          }
          onClick={closeSidebar}
        >
          Dashboard Home
        </NavLink>
        <NavLink
          to="/dashboard/winter-clothes"
          className={({ isActive }) =>
            cn("p-2 rounded-lg hover:bg-gray-100", {
              "bg-secondary ": isActive,
            })
          }
          onClick={closeSidebar}
        >
          Manage Winter Clothes
        </NavLink>
        <NavLink
          to="/dashboard/create-winter-clothes"
          className={({ isActive }) =>
            cn("p-2 rounded-lg hover:bg-gray-100", {
              "bg-secondary ": isActive,
            })
          }
          onClick={closeSidebar}
        >
          Create Winter Clothes Post
        </NavLink>
        <NavLink
          to="/dashboard/manage-users"
          className={({ isActive }) =>
            cn("p-2 rounded-lg hover:bg-gray-100", {
              "bg-secondary ": isActive,
            })
          }
          onClick={closeSidebar}
        >
          Manage Users
        </NavLink>
      </nav>
    </Card>
  );
};

export default DashboardSidebar;
