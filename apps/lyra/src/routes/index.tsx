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
import { DashboardLayout } from '../ui/layouts/dashboard';
import { Suspense } from 'react';
import { PageSpinner } from '@components/PageSpinner';
import ContactProfile from '../modules/ContactProfile';

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
          <Suspense fallback={<PageSpinner />}>
            <DashboardHome />
          </Suspense>
        ),
      },
      {
        path: 'contacts',
        element: (
          <Suspense fallback={<PageSpinner />}>
            <Contacts />
          </Suspense>
        ),
        children: [
          {
            path: '/contacts/profile',
            element: <ContactProfile />,
          },
        ],
      },
      {
        path: '/applications',
        element: (
          <Suspense fallback={<PageSpinner />}>
            <Applications />
          </Suspense>
        ),
      },
      {
        path: '/clients',
        element: (
          <Suspense fallback={<PageSpinner />}>
            <Clients />
          </Suspense>
        ),
      },
      {
        path: '/institutions',
        element: (
          <Suspense fallback={<PageSpinner />}>
            <Institutions />
          </Suspense>
        ),
      },
      {
        path: '/products',
        element: (
          <Suspense fallback={<PageSpinner />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: '/mails',
        element: (
          <Suspense fallback={<PageSpinner />}>
            <Mails />
          </Suspense>
        ),
      },
      {
        path: '/tasks',
        element: (
          <Suspense fallback={<PageSpinner />}>
            <Tasks />
          </Suspense>
        ),
      },
      {
        path: 'users',
        element: (
          <Suspense fallback={<PageSpinner />}>
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
