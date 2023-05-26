import { PlusOutlined } from '../../../ui/icons';
import {
  Button,
  Input,
  Pagination,
  Row,
  Table,
  Typography,
} from '../../../ui/antd';
import { setIsDrawerOpen } from './user.atoms';
import { useAtom } from 'jotai';
import UserDrawer from './components/UserDrawer';
import { useGetUsers } from './hooks/useGetUsers';
import { columns } from './components/userColumns';
import { useState } from 'react';

const { Search } = Input;

const Users = () => {
  const [, setIsOpen] = useAtom(setIsDrawerOpen);
  const [page, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const { users, isLoadingUsers } = useGetUsers(page, search);

  const handleNextPage = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
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
      <Search
        placeholder="Search User"
        onSearch={handleSearch}
        enterButton
        style={{ width: '25%', marginBottom: '1rem' }}
      />
      <div>
        <Table
          scroll={{ x: '100%' }}
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
