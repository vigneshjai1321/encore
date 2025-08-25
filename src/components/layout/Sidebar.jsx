import React from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  PlusOutlined,
  BookOutlined,
  HomeOutlined,
  CalendarOutlined,
  FileTextOutlined,
  FormOutlined,
  TeamOutlined,
  SettingOutlined,
  BarChartOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { ENCORE_LOGO } from '../../Constants/constants';


const { Sider: AntSider } = Layout;

const Sider = ({ collapsed }) => {
  const menuItems = [
    {
      key: 'bookmarks',
      icon: <BookOutlined />,
      label: 'BOOKMARKS',
      children: [
        {
          key: 'home',
          label: 'Home 🏠',
        },
        {
          key: 'sub1',
          label: 'Sub Item 1 🔹',
        },
        {
          key: 'sub2',
          label: 'Sub Item 2 🔹',
        },
        {
          key: 'sub3',
          label: 'Sub Item 3 🔹',
        },
      ],
    },
    {
      key: 'menu',
      icon: <HomeOutlined />,
      label: 'MENU',
      children: [
        {
          key: 'appointment',
          icon: <CalendarOutlined />,
          label: 'APPOINTMENT',
          children: [
            {
              key: 'appointment-sub1',
              label: 'Sub Item 1',
            },
            {
              key: 'appointment-sub2',
              label: 'Sub Item 2',
            },
            {
              key: 'appointment-sub3',
              label: 'Sub Item 3',
            },
          ],
        },
        {
          key: 'clinical-notes',
          icon: <FileTextOutlined />,
          label: 'CLINICAL NOTES',
          children: [
            {
              key: 'notes-sub1',
              label: 'Sub Item 1',
            },
            {
              key: 'notes-sub2',
              label: 'Sub Item 2',
            },
            {
              key: 'notes-sub3',
              label: 'Sub Item 3',
            },
          ],
        },
        {
          key: 'form-tools',
          icon: <FormOutlined />,
          label: 'FORM TOOLS',
          children: [
            {
              key: 'form-sub1',
              label: 'Sub Item 1',
            },
            {
              key: 'form-sub2',
              label: 'Sub Item 2',
            },
            {
              key: 'form-sub3',
              label: 'Sub Item 3',
            },
          ],
        },
        {
          key: 'residents',
          icon: <TeamOutlined />,
          label: 'RESIDENTS',
        },
        {
          key: 'setup',
          icon: <SettingOutlined />,
          label: 'SETUP',
          children: [
            {
              key: 'setup-sub1',
              label: 'Sub Item 1',
            },
            {
              key: 'setup-sub2',
              label: 'Sub Item 2',
            },
            {
              key: 'setup-sub3',
              label: 'Sub Item 3',
            },
          ],
        },
        {
          key: 'report',
          icon: <BarChartOutlined />,
          label: 'REPORT',
          children: [
            {
              key: 'report-sub1',
              label: 'Sub Item 1',
            },
            {
              key: 'report-sub2',
              label: 'Sub Item 2',
            },
            {
              key: 'report-sub3',
              label: 'Sub Item 3',
            },
          ],
        },
      ],
    },
  ];

  return (
    <AntSider 
      trigger={null} 
      collapsible 
      collapsed={collapsed}
      theme="dark"
      width={280}
      style={{
        overflow: 'scroll',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      {/* Logo */}
      {!collapsed && (
        <div style={{ 
          padding: '16px', 
          textAlign: 'center',
          borderBottom: '1px solid #f0f0f0'
        }}>
          <img
            src={ENCORE_LOGO} 
            alt="Encore Logo"
            style={{ height: 40, maxWidth: '100%' }}
          />
        </div>
      )}

      {/* New Order Button */}
      <div style={{ padding: '16px' }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          block
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: collapsed ? 'center' : 'flex-start',
            gap: collapsed ? 0 : 8,
          }}
        >
          {!collapsed && 'NEW ORDER'}
        </Button>
      </div>

      {/* Menu */}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['home']}
        items={menuItems}
        triggerSubMenuAction="hover"
        style={{
          borderRight: 0,
        }}
      />
    </AntSider>
  );
};

export default Sider;