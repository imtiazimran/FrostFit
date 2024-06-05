import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { logout, selectUser } from "@/redux/features/authentication/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  return (
    <header className="bg-primary">
      <div className="flex justify-between px-10 py-3 font-semibold ">
        <Link to={"/"}>Navbar</Link>
        <nav className="space-x-5">
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
        </nav>
        {user ? (
          <div className="space-x-5">
            <NavLink
              className={({ isActive }) => cn(isActive ? "text-secondary" : "")}
              to="/profile"
            >
              Profile
            </NavLink>
            <Button variant="outline" onClick={() => dispatch(logout())}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="space-x-5">
            <NavLink
              className={({ isActive }) => cn(isActive ? "text-secondary" : "")}
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) => cn(isActive ? "text-secondary" : "")}
              to="/register"
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
