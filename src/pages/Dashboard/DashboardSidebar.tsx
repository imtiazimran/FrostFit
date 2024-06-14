import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

const DashboardSidebar = () => {
  return (
    <Card className="overflow-auto p-4 lg:p-5 bg-light-gray h-screen col-span-2  sticky top-0 left-0 shadow-lg">
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/dashboard/home"
          className={({ isActive }) =>
            cn("p-2 rounded-lg hover:bg-gray-100", {
              "bg-secondary ": isActive,
            })
          }
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
        >
          All Winter Clothes
        </NavLink>
        <NavLink
          to="/dashboard/create-winter-clothes"
          className={({ isActive }) =>
            cn("p-2 rounded-lg hover:bg-gray-100", {
              "bg-secondary ": isActive,
            })
          }
        >
          Create Winter Clothes Post
        </NavLink>
      </nav>
    </Card>
  );
};

export default DashboardSidebar;
