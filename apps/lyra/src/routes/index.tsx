import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Login } from "../pages/auth/login";
import { AuthWrapper, PublicWrapper } from "./wrapper";
import { DashboardHome, Leads, Users } from "../pages";
import { DashboardLayout } from "../ui/layouts";
import { NotFound } from "../pages/404";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <PublicWrapper component={<Login />} />,
  },
  {
    path: "/",
    element: <AuthWrapper component={<DashboardLayout />} />,
    children: [
      {
        index: true,
        element: <Navigate to='/home' replace={true} />
      },
      {
        path: "home",
        element: <Suspense fallback="loading..."><DashboardHome /></Suspense>,
      },
      {
        path: "leads",
        element:  <Suspense fallback="loading..."><Leads /></Suspense>,
      },
      {
        path: "users",
        element: <Suspense fallback="loading..."><Users /></Suspense>,
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

const CrmRouterProvider = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default CrmRouterProvider