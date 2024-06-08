import HomeLayout from "@/layout/HomeLayout";
import MainLayout from "@/layout/MainLayout";
import WinterClothesGrid from "@/pages/AllWinterClothes/AllWinterClothes";
import WinterClothesDetail from "@/pages/AllWinterClothes/ClotheDetails";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";

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
        path: "/dashboard",
        element: <div>Dashboard</div>,
      },
      {
        path: "/winter-clothes",
        element: <WinterClothesGrid />,
      },
      {
        path: "/winter-clothes/:id",
        element: <WinterClothesDetail />,
      },
    ],
  },
]);
