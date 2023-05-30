import { Outlet } from 'react-router-dom';

const Contacts = () => {
  return (
    <div>
      <h2>This is contacts page</h2>
      <Outlet />
    </div>
  );
};

export default Contacts;
