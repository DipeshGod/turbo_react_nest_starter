import { Link } from '@tanstack/router';
import { Button } from 'antd';

const Home = () => {
  return (
    <div>
      <h2>This is home page</h2>
      <Link to="/dashboard">
        <Button type="primary">SignIn</Button>
      </Link>
    </div>
  );
};

export { Home };
