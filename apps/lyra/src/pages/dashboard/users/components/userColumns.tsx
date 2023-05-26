import { ColumnsType } from 'antd/es/table';
import { Tag } from '../../../../ui/antd';

interface User {
  id: string;
  name: string;
  email: string;
  mobileNumber: string;
  address: {
    country: string;
    city: string;
    location: string;
  };
  role: string;
  status: string;
}

export const columns: ColumnsType<User> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Mobile Number',
    dataIndex: 'mobileNumber',
    key: 'mobileNumber',
  },
  {
    title: 'Country',
    dataIndex: ['address', 'country'],
    key: 'country',
  },
  {
    title: 'City',
    dataIndex: ['address', 'city'],
    key: 'city',
  },
  {
    title: 'Location',
    dataIndex: ['address', 'location'],
    key: 'location',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <Tag color={status === 'active' ? 'green' : 'red'}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
];
