import React from 'react';
const DashboardHome = React.lazy(() => import('./dashboard/home'));
const Users = React.lazy(() => import('./dashboard/users'));
const ContactDetails = React.lazy(() => import('./dashboard/contact_details'));
const Contacts = React.lazy(() => import('./dashboard/contacts'));
const Applications = React.lazy(() => import('./dashboard/applications'));
const Clients = React.lazy(() => import('./dashboard/clients'));
const Institutions = React.lazy(() => import('./dashboard/institutions'));
const Products = React.lazy(() => import('./dashboard/products'));
const Mails = React.lazy(() => import('./dashboard/mails'));
const Tasks = React.lazy(() => import('./dashboard/tasks'));
const NotFound = React.lazy(() => import('./404/index'));
const Login = React.lazy(() => import('./auth/login'));

export {
  DashboardHome,
  Users,
  Contacts,
  ContactDetails,
  Applications,
  Clients,
  Institutions,
  Products,
  Mails,
  Tasks,
  NotFound,
  Login,
};
