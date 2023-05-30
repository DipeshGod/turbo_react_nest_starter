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
  HomeOutlined,
} from '@icons/index';
import { Layout, Menu, Button, theme, Row } from '@antd/index';
import { Link, NavLink, Outlet } from 'react-router-dom';
import SiderButton from '@components/SiderButton';

const { Header, Sider, Content } = Layout;

export const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const logoutUser = () => {
    localStorage.removeItem('jwt_token');
  };

  return (
    <Layout hasSider={true}>
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
        <div
          style={{
            padding: '1rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img src="/haddi.jpg" alt="expertsLogo" width="100%" height="50px" />
        </div>
        <Menu theme="dark" mode="inline">
          <Menu.Item key={'1'} style={{ backgroundColor: 'transparent' }}>
            <NavLink to="/">
              {({ isActive, isPending }) => (
                <SiderButton
                  isActive={isActive}
                  isPending={isPending}
                  text="Dashboard"
                  icon={<HomeOutlined />}
                />
              )}
            </NavLink>
          </Menu.Item>
          <Menu.Item key={'2'} style={{ backgroundColor: 'transparent' }}>
            <NavLink to="/contacts/profile">
              {({ isActive, isPending }) => (
                <SiderButton
                  isActive={isActive}
                  isPending={isPending}
                  text="Contacts"
                  icon={<GitlabOutlined />}
                />
              )}
            </NavLink>
          </Menu.Item>
          <Menu.Item key={'3'} style={{ backgroundColor: 'transparent' }}>
            <NavLink to="/applications">
              {({ isActive, isPending }) => (
                <SiderButton
                  isActive={isActive}
                  isPending={isPending}
                  text="Applications"
                  icon={<FileProtectOutlined />}
                />
              )}
            </NavLink>
          </Menu.Item>
          <Menu.Item key={'4'} style={{ backgroundColor: 'transparent' }}>
            <NavLink to="/clients">
              {({ isActive, isPending }) => (
                <SiderButton
                  isActive={isActive}
                  isPending={isPending}
                  text="Clients"
                  icon={<UserAddOutlined />}
                />
              )}
            </NavLink>
          </Menu.Item>
          <Menu.Item key={'5'} style={{ backgroundColor: 'transparent' }}>
            <NavLink to="/institutions">
              {({ isActive, isPending }) => (
                <SiderButton
                  isActive={isActive}
                  isPending={isPending}
                  text="Institutions"
                  icon={<GlobalOutlined />}
                />
              )}
            </NavLink>
          </Menu.Item>
          <Menu.Item key={'6'} style={{ backgroundColor: 'transparent' }}>
            <NavLink to="/products">
              {({ isActive, isPending }) => (
                <SiderButton
                  isActive={isActive}
                  isPending={isPending}
                  text="Products"
                  icon={<BookOutlined />}
                />
              )}
            </NavLink>
          </Menu.Item>
          <Menu.Item key={'7'} style={{ backgroundColor: 'transparent' }}>
            <NavLink to="/mails">
              {({ isActive, isPending }) => (
                <SiderButton
                  isActive={isActive}
                  isPending={isPending}
                  text="Mails"
                  icon={<MailOutlined />}
                />
              )}
            </NavLink>
          </Menu.Item>
          <Menu.Item key={'8'} style={{ backgroundColor: 'transparent' }}>
            <NavLink to="/tasks">
              {({ isActive, isPending }) => (
                <SiderButton
                  isActive={isActive}
                  isPending={isPending}
                  text="Tasks"
                  icon={<ScheduleOutlined />}
                />
              )}
            </NavLink>
          </Menu.Item>
          <Menu.Item key={'9'} style={{ backgroundColor: 'transparent' }}>
            <NavLink to="/users">
              {({ isActive, isPending }) => (
                <SiderButton
                  isActive={isActive}
                  isPending={isPending}
                  text="Users"
                  icon={<UserOutlined />}
                />
              )}
            </NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Row justify="space-between">
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
            <Link to="/login">
              <Button
                onClick={logoutUser}
                type="primary"
                style={{ marginRight: '1rem' }}
              >
                Sign Out
              </Button>
            </Link>
          </Row>
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
