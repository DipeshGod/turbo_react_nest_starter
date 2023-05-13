import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Outlet,
  RootRoute,
  Route,
  Router,
  RouterProvider,
} from '@tanstack/router';
import { Home } from './routes/home.tsx';
import DashboardHome from './routes/dashboard/index.tsx';
import DashboardLayout from './components/dashboardLayout/index.tsx';
import 'antd/dist/reset.css';
import Leads from './routes/dashboard/leads.tsx';
import Users from './routes/dashboard/users.tsx';

// Create a root route
const rootRoute = new RootRoute({
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

//create a dashboard root route
const dashboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: () => (
    <div>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </div>
  ),
});

const dashboardIndexRoute = new Route({
  getParentRoute: () => dashboardRoute,
  path: '/',
  component: DashboardHome,
});

const dashboarLeadsRoute = new Route({
  getParentRoute: () => dashboardRoute,
  path: '/leads',
  component: Leads,
});

const dashboardUsersRoute = new Route({
  getParentRoute: () => dashboardRoute,
  path: '/users',
  component: Users,
});

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute.addChildren([
    dashboardIndexRoute,
    dashboarLeadsRoute,
    dashboardUsersRoute,
  ]),
]);

// Create the router using your route tree
const router = new Router({ routeTree });

// Register your router for maximum type safety
declare module '@tanstack/router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
