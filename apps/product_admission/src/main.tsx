import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Link,
  Outlet,
  RootRoute,
  Route,
  Router,
  RouterProvider,
} from '@tanstack/router';
import Login from './routes/login.tsx';

function Root() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}

// Create a root route
const rootRoute = new RootRoute({
  component: Root,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Login,
});

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([indexRoute]);

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
