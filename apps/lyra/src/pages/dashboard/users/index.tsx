import { UserDrawer } from './components/UserDrawer';
import { UserTable } from './components/UserTable';
import { UserPageHeader } from './components/UserPageHeader';

const Users = () => {
  return (
    <div>
      <UserPageHeader />
      <UserTable />
      <UserDrawer />
    </div>
  );
};

export default Users;
