import { useState } from 'react';
import {
  BookOutlined,
  FileProtectOutlined,
  GitlabOutlined,
  GlobalOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ScheduleOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Link, Outlet } from '@tanstack/router';
import SiderButton from '../ui/SiderButton';
import { HomeOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth="0"
        style={{ height: '100vh' }}
        onBreakpoint={(broken) => {
          setCollapsed(broken);
        }}
      >
        <div style={{ padding: '1rem' }}>
          <img
            src="/expertsLogo.png"
            width="100%"
            height="100%"
            alt="expertsLogo"
          />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key={'1'}>
            <Link to="/dashboard">
              <SiderButton text="Dashboard" icon={<HomeOutlined />} />
            </Link>
          </Menu.Item>
          <Menu.Item key={'2'}>
            <Link to="/dashboard/leads">
              <SiderButton text="Leads" icon={<GitlabOutlined />} />
            </Link>
          </Menu.Item>
          <Menu.Item key={'3'}>
            <Link to="/dashboard">
              <SiderButton text="Applications" icon={<FileProtectOutlined />} />
            </Link>
          </Menu.Item>
          <Menu.Item key={'4'}>
            <Link to="/dashboard">
              <SiderButton text="Clients" icon={<UserAddOutlined />} />
            </Link>
          </Menu.Item>
          <Menu.Item key={'5'}>
            <Link to="/dashboard">
              <SiderButton text="Institutions" icon={<GlobalOutlined />} />
            </Link>
          </Menu.Item>
          <Menu.Item key={'6'}>
            <Link to="/dashboard">
              <SiderButton text="Products" icon={<BookOutlined />} />
            </Link>
          </Menu.Item>
          <Menu.Item key={'7'}>
            <Link to="/dashboard">
              <SiderButton text="Mails" icon={<MailOutlined />} />
            </Link>
          </Menu.Item>
          <Menu.Item key={'8'}>
            <Link to="/dashboard">
              <SiderButton text="Tasks" icon={<ScheduleOutlined />} />
            </Link>
          </Menu.Item>
          <Menu.Item key={'9'}>
            <Link to="/dashboard/users">
              <SiderButton text="Users" icon={<UserOutlined />} />
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
