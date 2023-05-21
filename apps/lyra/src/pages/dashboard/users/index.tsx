import { PlusOutlined } from '@ant-design/icons';
import { Button, Row, Table, Typography } from 'antd';
import { setIsDrawerOpen } from './user.atoms';
import { useAtom } from 'jotai';
import UserDrawer from './components/UserDrawer';
import { useGetUsers } from './hooks/useGetUsers';
import { columns } from './components/userColumns';

const Users = () => {
  const [, setIsOpen] = useAtom(setIsDrawerOpen);
  const { users, isLoadingUsers } = useGetUsers();

  return (
    <div>
      <Row justify="space-between" align="middle">
        <Typography.Title level={2}>Users</Typography.Title>
        <Button
          onClick={() => setIsOpen(true)}
          type="primary"
          icon={<PlusOutlined />}
        >
          Add User
        </Button>
      </Row>
      <div>
        <Table loading={isLoadingUsers} columns={columns} dataSource={users} />
      </div>
      <UserDrawer />
    </div>
  );
};

export default Users;
