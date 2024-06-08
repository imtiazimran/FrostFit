import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

const DashboardSidebar = () => {
  return (
    <Card className="h-screen w-64 p-4 shadow-lg">
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            cn(
              "p-2 rounded-lg",
              isActive ? "bg-secondary text-white" : "hover:bg-gray-100"
            )
          }
        >
          Dashboard Home
        </NavLink>
        <NavLink
          to="/dashboard/winter-clothes"
          className={({ isActive }) =>
            cn(
              "p-2 rounded-lg",
              isActive ? "bg-secondary text-white" : "hover:bg-gray-100"
            )
          }
        >
          All Winter Clothes
        </NavLink>
        <NavLink
          to="/dashboard/create-winter-clothes"
          className={({ isActive }) =>
            cn(
              "p-2 rounded-lg",
              isActive ? "bg-secondary text-white" : "hover:bg-gray-100"
            )
          }
        >
          Create Winter Clothes Post
        </NavLink>
      </nav>
    </Card>
  );
};

export default DashboardSidebar;
