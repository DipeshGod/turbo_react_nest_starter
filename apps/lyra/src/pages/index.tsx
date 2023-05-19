import React from 'react';
const DashboardHome = React.lazy(() => import('./dashboard/home'));
const Users = React.lazy(() => import('./dashboard/users'));
const Contacts = React.lazy(() => import('./dashboard/contacts'));
const Applications = React.lazy(() => import('./dashboard/applications'));
const Clients = React.lazy(() => import('./dashboard/clients'));
const Institutions = React.lazy(() => import('./dashboard/institutions'));
const Products = React.lazy(() => import('./dashboard/products'));
const Mail = React.lazy(() => import('./dashboard/mails'));
const Tasks = React.lazy(() => import('./dashboard/tasks'));

export {
  DashboardHome,
  Users,
  Contacts,
  Applications,
  Clients,
  Institutions,
  Products,
  Mail,
  Tasks,
};
