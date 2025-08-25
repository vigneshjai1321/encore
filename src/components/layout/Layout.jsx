import React, { useState } from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Sider from './Sidebar';

const { Content } = Layout;

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsed={collapsed} />
      <Layout style={{ marginLeft: collapsed ? 80 : 280 }}>
        <Header collapsed={collapsed} onToggle={toggleCollapsed} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: '#fff',
            borderRadius: 6,
          }}
        >
          {children || 'Content goes here'}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;