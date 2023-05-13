import { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Link } from '@tanstack/router';
import SiderButton from '../ui/SiderButton';

const { Header, Sider, Content } = Layout;

const DashboardLayout = ({ children }: { children: JSX.Element }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: '100vh' }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key={'1'}>
            <Link to="/dashboard">
              <SiderButton text="Dashboard" />
            </Link>
          </Menu.Item>
          <Menu.Item key={'2'}>
            <Link to="/dashboard/leads">
              <SiderButton text="Leads" />
            </Link>
          </Menu.Item>
          <Menu.Item key={'3'}>
            <Link to="/dashboard/users">
              <SiderButton text="Users" />
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
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
