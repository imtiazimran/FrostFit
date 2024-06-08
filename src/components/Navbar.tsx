import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import NavSidebar from "@/layout/NavSidebar";
import { cn } from "@/lib/utils";
import { logout, selectUser } from "@/redux/features/authentication/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useDarkMode } from "@/utils/DarkMoodProvider";
import { MoonIcon } from "@radix-ui/react-icons";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-removebg-preview.png";

const Navbar = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const { toggleDarkMode } = useDarkMode(); // Use the context

  return (
    <header className="bg-primary ">
      <div className="flex justify-between items-center px-10 py-1 font-semibold">
        <Link to={"/"}>
          <img className="w-14" src={logo} alt="" />
        </Link>
        <nav className="hidden md:flex justify-center items-center space-x-5">
          <NavLink
            className={({ isActive }) => cn(isActive ? "text-secondary" : "")}
            to="/winter-clothes"
          >
            Winter Clothes
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
          onClick={toggleDarkMode}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <Switch id="dark-mode-toggle" />
          <Label htmlFor="dark-mode-toggle">
            <MoonIcon />
          </Label>
        </div>
        <div className="md:hidden">
          <NavSidebar user={user} dispatch={dispatch} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
