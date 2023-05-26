import { Link } from 'react-router-dom';
import { Button } from '../../ui/antd';

const Login = () => {
  const loginUser = () => {
    localStorage.setItem('jwt_token', 'asdjhagdjgs');
  };

  return (
    <div>
      <h2>CRM Login</h2>
      <Link to="/">
        <Button onClick={loginUser} type="primary">
          SignIn
        </Button>
      </Link>
    </div>
  );
};

export { Login };
