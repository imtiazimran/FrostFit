/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { logout } from "@/redux/features/authentication/authSlice";
import { NavLink } from "react-router-dom";

const DashboardSidebar = ({ user, dispatch }: { user: any; dispatch: any }) => {
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>FrostFit</SheetTitle>
          <SheetDescription>
            <nav className=" md:hidden flex flex-col gap-5 justify-start items-start capitalize text-xl ">
              <NavLink
                className={({ isActive }) =>
                  cn(
                    isActive
                      ? "bg-primary text-white"
                      : "bg-primary-foreground",
                    "p-2   w-full "
                  )
                }
                to="/winter-clothes"
              >
                winter-clothes
              </NavLink>
              {user && (
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      isActive
                        ? "bg-primary text-white"
                        : "bg-primary-foreground",
                      "p-2  w-full "
                    )
                  }
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              )}
            </nav>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter className="absolute bottom-2 w-[85%]">
          {user ? (
            <Button onClick={() => dispatch(logout())} variant="destructive">
              Logout
            </Button>
          ) : (
            <div className="flex justify-center items-center gap-3">
              <NavLink
                className={({ isActive }) =>
                  cn(
                    isActive ? "text-secondary" : "",
                    "bg-primary p-2 text-center"
                  )
                }
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  cn(
                    isActive ? "text-secondary" : "",
                    "bg-primary p-2 text-center"
                  )
                }
                to="/register"
              >
                Register
              </NavLink>
            </div>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default DashboardSidebar;
