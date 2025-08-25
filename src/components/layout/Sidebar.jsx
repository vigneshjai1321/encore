import React from "react";
import { Layout, Menu, Button } from "antd";
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
} from "@ant-design/icons";
import { ENCORE_LOGO } from "../../Constants/constants";

const { Sider: AntSider } = Layout;

const Sider = ({ collapsed }) => {
  const menuItems = [
    {
      key: "bookmarks",
      icon: <BookOutlined />, // left icon
      label: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>BOOKMARKS</span>
          <EditOutlined style={{ marginLeft: 8 }} />
        </div>
      ),
      children: [
        {
          key: "home",
          label: "Home 🏠",
        },
        {
          key: "sub1",
          label: "Sub Item 1 🔹",
        },
        {
          key: "sub2",
          label: "Sub Item 2 🔹",
        },
        {
          key: "sub3",
          label: "Sub Item 3 🔹",
        },
      ],
    },
    {
      key: "menu",
      icon: <HomeOutlined />,
      label: "MENU",
      children: [
        {
          key: "home",
          label: "Home 🏠",
        },
        {
          key: "sub1",
          label: "Sub Item 1 🔹",
        },
        {
          key: "sub2",
          label: "Sub Item 2 🔹",
        },
        {
          key: "sub3",
          label: "Sub Item 3 🔹",
        },
      ],
    },
    {
    key: "appointment",
    icon: <CalendarOutlined />,
    label: "Appointment",
    children: [
      { key: "a1", label: "Today" },
      { key: "a2", label: "Upcoming" },
    ],
  },
  {
    key: "clinical",
    icon: <FileTextOutlined />,
    label: "Clinical Notes",
    children: [
      { key: "c1", label: "Notes 1" },
      { key: "c2", label: "Notes 2" },
    ],
  },
  {
    key: "formtools",
    icon: <FormOutlined />,
    label: "Form Tools",
    children: [
      { key: "f1", label: "Tool 1" },
      { key: "f2", label: "Tool 2" },
    ],
  },
  {
    key: "residents",
    icon: <TeamOutlined />,
    label: "Residents", // No dropdown
  },
  {
    key: "setup",
    icon: <SettingOutlined />,
    label: "Setup",
    children: [
      { key: "s1", label: "General" },
      { key: "s2", label: "Advanced" },
    ],
  },
  {
    key: "report",
    icon: <BarChartOutlined />,
    label: "Report",
    children: [
      { key: "r1", label: "Daily" },
      { key: "r2", label: "Monthly" },
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
        overflow: "scroll",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      {/* Logo */}
      {!collapsed && (
        <div
          style={{
            padding: "16px",
            textAlign: "center",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <img
            src={ENCORE_LOGO}
            alt="Encore Logo"
            style={{ height: 40, maxWidth: "100%" }}
          />
        </div>
      )}

      {/* New Order Button */}
      <div style={{ padding: "16px" }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          block
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "flex-start",
            gap: collapsed ? 0 : 8,
          }}
        >
          {!collapsed && "NEW ORDER"}
        </Button>
      </div>

      {/* Menu */}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["home"]}
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
