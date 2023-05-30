import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthWrapper, PublicWrapper } from './wrapper';
import {
  DashboardHome,
  Contacts,
  Users,
  Applications,
  Clients,
  Institutions,
  Products,
  Tasks,
  Mails,
  NotFound,
  Login,
} from '@pages/index';
import { DashboardLayout } from '../ui/layouts';
import { Suspense } from 'react';
import { Spin } from '@antd/index';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <PublicWrapper component={<Login />} />,
  },
  {
    path: '/',
    element: <AuthWrapper component={<DashboardLayout />} />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Spin />}>
            <DashboardHome />
          </Suspense>
        ),
      },
      {
        path: 'contacts',
        element: (
          <Suspense fallback={<Spin />}>
            <Contacts />
          </Suspense>
        ),
      },
      {
        path: '/applications',
        element: (
          <Suspense fallback={<Spin />}>
            <Applications />
          </Suspense>
        ),
      },
      {
        path: '/clients',
        element: (
          <Suspense fallback={<Spin />}>
            <Clients />
          </Suspense>
        ),
      },
      {
        path: '/institutions',
        element: (
          <Suspense fallback={<Spin />}>
            <Institutions />
          </Suspense>
        ),
      },
      {
        path: '/products',
        element: (
          <Suspense fallback={<Spin />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: '/mails',
        element: (
          <Suspense fallback={<Spin />}>
            <Mails />
          </Suspense>
        ),
      },
      {
        path: '/tasks',
        element: (
          <Suspense fallback={<Spin />}>
            <Tasks />
          </Suspense>
        ),
      },
      {
        path: 'users',
        element: (
          <Suspense
            fallback={
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  width: '100%',
                }}
              >
                <Spin />
              </div>
            }
          >
            <Users />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const CrmRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default CrmRouterProvider;
