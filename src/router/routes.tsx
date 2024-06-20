import DashboardLayout from "@/layout/DashboardLayout";
import HomeLayout from "@/layout/HomeLayout";
import MainLayout from "@/layout/MainLayout";
import WinterClothesGrid from "@/pages/AllWinterClothes/AllWinterClothes";
import WinterClothesDetail from "@/pages/AllWinterClothes/ClotheDetails";
import BenefitsOfDonating from "@/pages/Blog";
import CreateWinterClothPost from "@/pages/Dashboard/CreateWinterClothPost";
import DashboardHome from "@/pages/Dashboard/DashboardHome";
import ManageClothes from "@/pages/Dashboard/ManageClothes";
import UpdateUserRole from "@/pages/Dashboard/ManageUsers";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import PrivetRoute from "@/utils/PrivetRoute";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/winter-clothes",
        element: <WinterClothesGrid />,
      },
      {
        path: "/winter-clothes/:id",
        element: <WinterClothesDetail />,
      },
      {
        path: "blogs",
        element: <BenefitsOfDonating/>
      },
      {
        path: "/dashboard",
        element: (
          <PrivetRoute>
            <DashboardLayout />
          </PrivetRoute>
        ),
        children: [
          {
            index: true,
            element: <Navigate to={"/dashboard/home"} />,
          },
          {
            path: "home",
            element: <DashboardHome />,
          },
          {
            path: "winter-clothes",
            element: <ManageClothes />,
          },
          {
            path: "create-winter-clothes",
            element: <CreateWinterClothPost />,
          },
          {
            path: "manage-users",
            element: <UpdateUserRole />,
          },
        ],
      },
    ],
  },
]);
