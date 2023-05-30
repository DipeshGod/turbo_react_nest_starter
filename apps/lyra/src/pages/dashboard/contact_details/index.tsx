import { Outlet } from 'react-router-dom';

const ContactDetails = () => {
  return (
    <div>
      <h2>This is contacts details page</h2>
      <Outlet />
    </div>
  );
};

export default ContactDetails;
