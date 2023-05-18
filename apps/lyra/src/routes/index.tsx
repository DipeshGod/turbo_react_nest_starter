import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from "../pages/auth/login";
import { AuthWrapper, PublicWrapper, DefaultWrapper } from "./wrapper";
import { DashboardHome, Leads, Users } from "../pages";
import { DashboardLayout } from "../ui/layouts";
import { NotFound } from "../pages/404";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <PublicWrapper component={<Login />} />,
  },
  {
    path: "/",
    element: <DefaultWrapper />
  },
  {
    element: <AuthWrapper component={<DashboardLayout />} />,
    children: [
      {
        index: true,
        path: "dashboard",
        element: <DashboardHome />,
      },
      {
        path: "leads",
        element: <Leads />,
      },
      {
        path: "users",
        element: <Users />,
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