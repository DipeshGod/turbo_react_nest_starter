import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
  Tag,
  Typography,
} from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const Users = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  useEffect(() => {
    fetch('/users')
      .then((res) => res.json())
      .then((data) => console.log('data', data));
  }, []);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Row justify="space-between" align="middle">
        <Typography.Title level={2}>Users</Typography.Title>
        <Button onClick={showDrawer} type="primary" icon={<PlusOutlined />}>
          Add User
        </Button>
      </Row>
      <div>
        <Table columns={columns} dataSource={data} />;
      </div>
      <Drawer
        width={600}
        title="Add User"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Form
          name="userForm"
          onFinish={(values) => {
            console.log('values', values);
          }}
        >
          <Row style={{ flexDirection: 'column' }}>
            <div style={{ minHeight: '85vh' }}>
              <Row justify="space-between">
                <Form.Item label="First Name" name="firstName">
                  <Input placeholder="Johan" />
                </Form.Item>
                <Form.Item label="Last Name" name="lastName">
                  <Input placeholder="Liebert" />
                </Form.Item>
              </Row>
              <Form.Item label="Email" name="email">
                <Input placeholder="john@email.com" />
              </Form.Item>

              <Form.Item label="Role" name="role">
                <Select placeholder="Select Role" defaultValue="manager">
                  <Select.Option value="admin">Admin</Select.Option>
                  <Select.Option value="manager">Manager</Select.Option>
                  <Select.Option value="admissionOfficer">
                    Admission Officer
                  </Select.Option>
                  <Select.Option value="counsellor">Counsellor</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Branch" name="branch">
                <Select showSearch placeholder="Select Branch">
                  <Select.Option value="putalisadak">Putalisadak</Select.Option>
                  <Select.Option value="maharajgunj">Maharajgunj</Select.Option>
                  <Select.Option value="chitwan">Chitwan</Select.Option>
                  <Select.Option value="biratnagar">Biratnagar</Select.Option>
                </Select>
              </Form.Item>
            </div>
            <Row>
              <Space>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button htmlType="submit" type="primary">
                  Save
                </Button>
              </Space>
            </Row>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
};

export default Users;
