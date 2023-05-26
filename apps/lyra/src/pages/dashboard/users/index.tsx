import { PlusOutlined } from '@ant-design/icons';
import { Button, Pagination, Row, Table, Typography } from 'antd';
import { setIsDrawerOpen } from './user.atoms';
import { useAtom } from 'jotai';
import UserDrawer from './components/UserDrawer';
import { useGetUsers } from './hooks/useGetUsers';
import { columns } from './components/userColumns';
import { useState } from 'react';

const Users = () => {
  const [, setIsOpen] = useAtom(setIsDrawerOpen);
  const [page, setCurrentPage] = useState(1);
  const { users, isLoadingUsers } = useGetUsers(page);

  const handleNextPage = (page: number) => {
    setCurrentPage(page);
  };

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
        <Table
          loading={isLoadingUsers}
          columns={columns}
          dataSource={users?.data.paginatedUsers}
          pagination={false}
        />
        <Row style={{ marginTop: '2rem' }} justify="end">
          <Pagination
            current={page}
            total={users?.data.totalUsers}
            onChange={handleNextPage}
            hideOnSinglePage
          />
        </Row>
      </div>
      <UserDrawer />
    </div>
  );
};

export default Users;
