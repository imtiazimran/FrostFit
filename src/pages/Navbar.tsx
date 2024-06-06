import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import DashboardSidebar from "@/layout/DashboardSidebar";
import { cn } from "@/lib/utils";
import { logout, selectUser } from "@/redux/features/authentication/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { MoonIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  return (
    <header className="bg-primary">
      <div className="flex justify-between items-center px-10 py-3 font-semibold ">
        <Link to={"/"}>Navbar</Link>
        <nav className="hidden  md:flex justify-center items-center space-x-5">
          <NavLink
            className={({ isActive }) => cn(isActive ? "text-secondary" : "")}
            to="/winter-clothes"
          >
            winter-clothes
          </NavLink>
          {user && (
            <NavLink
              className={({ isActive }) => cn(isActive ? "text-secondary" : "")}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          )}
          <div className="flex items-center space-x-5">
            {user ? (
              <div className="flex justify-center items-center space-x-5">
                <Button variant="outline" onClick={() => dispatch(logout())}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="space-x-5">
                <NavLink
                  className={({ isActive }) =>
                    cn(isActive ? "text-secondary" : "")
                  }
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    cn(isActive ? "text-secondary" : "")
                  }
                  to="/register"
                >
                  Register
                </NavLink>
              </div>
            )}
          </div>
        </nav>
        <div
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center space-x-2"
        >
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">
            <MoonIcon />
          </Label>
        </div>
        <div className="md:hidden">
          <DashboardSidebar user={user} dispatch={dispatch} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
