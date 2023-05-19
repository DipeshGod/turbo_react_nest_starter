import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from '../pages/auth/login';
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
} from '../pages';
import { DashboardLayout } from '../ui/layouts';
import { NotFound } from '../pages/404';
import { Suspense } from 'react';
import Mails from '../pages/dashboard/mails';
import { Skeleton } from 'antd';

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
          <Suspense fallback={<Skeleton />}>
            <DashboardHome />
          </Suspense>
        ),
      },
      {
        path: 'contacts',
        element: (
          <Suspense fallback={<Skeleton />}>
            <Contacts />
          </Suspense>
        ),
      },
      {
        path: '/applications',
        element: (
          <Suspense fallback={<Skeleton />}>
            <Applications />
          </Suspense>
        ),
      },
      {
        path: '/clients',
        element: (
          <Suspense fallback={<Skeleton />}>
            <Clients />
          </Suspense>
        ),
      },
      {
        path: '/institutions',
        element: (
          <Suspense fallback={<Skeleton />}>
            <Institutions />
          </Suspense>
        ),
      },
      {
        path: '/products',
        element: (
          <Suspense fallback={<Skeleton />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: '/mails',
        element: (
          <Suspense fallback={<Skeleton />}>
            <Mails />
          </Suspense>
        ),
      },
      {
        path: '/tasks',
        element: (
          <Suspense fallback={<Skeleton />}>
            <Tasks />
          </Suspense>
        ),
      },
      {
        path: 'users',
        element: (
          <Suspense fallback={<Skeleton />}>
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
