import { useState } from 'react';
import { Input, Pagination, Row, Table } from '@antd/index';
import { useGetUsers } from '../hooks/useGetUsers';
import { columns } from './userColumns';

const { Search } = Input;

const UserTable = () => {
  const [page, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');

  const { users } = useGetUsers(page, search);

  const handleNextPage = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <>
      <Search
        placeholder="Search User"
        onSearch={handleSearch}
        enterButton
        style={{ width: '25%', marginBottom: '1rem' }}
      />
      <div>
        <Table
          scroll={{ x: '100%' }}
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
    </>
  );
};

export { UserTable };
