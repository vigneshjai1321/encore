import React, { useState, useEffect } from "react";
import { Layout, Button, Space, Dropdown, Avatar, Alert, Drawer } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AppstoreOutlined,
  SearchOutlined,
  BellOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  MoreOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { ENCORE_LOGO_DARK } from "../../Constants/constants";

const { Header: AntHeader } = Layout;

const Header = ({ collapsed, onToggle }) => {
  const [screenSize, setScreenSize] = useState("desktop");
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  // Track screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 576) {
        setScreenSize("mobile");
      } else if (width < 992) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const userMenuItems = [
    {
      key: "profile",
      label: "Profile",
      icon: <UserOutlined />,
    },
    {
      key: "settings",
      label: "Settings",
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      label: "Logout",
    },
  ];

  // Mobile action menu items
  const mobileActionItems = [
    {
      key: "apps",
      label: "Apps",
      icon: <AppstoreOutlined />,
    },
    {
      key: "search",
      label: "Search",
      icon: <SearchOutlined />,
    },
    {
      key: "notifications",
      label: "Notifications",
      icon: <BellOutlined />,
    },
    {
      key: "help",
      label: "Help",
      icon: <QuestionCircleOutlined />,
    },
  ];

  const showMobileMenu = () => setMobileMenuVisible(true);
  const hideMobileMenu = () => setMobileMenuVisible(false);

  // Render action buttons based on screen size
  const renderActionButtons = () => {
    if (screenSize === "mobile") {
      // Mobile: Show only essential buttons + overflow menu
      return (
        <Space size="small">
          <Button
            type="text"
            icon={<BellOutlined />}
            size="large"
            style={{ padding: "8px" }}
          />
          <Dropdown
            menu={{ items: mobileActionItems }}
            placement="bottomRight"
            trigger={["click"]}
          >
            <Button
              type="text"
              icon={<EllipsisOutlined />}
              size="large"
              style={{ padding: "8px" }}
            />
          </Dropdown>
        </Space>
      );
    } else if (screenSize === "tablet") {
      // Tablet: Show some buttons + overflow menu
      return (
        <Space size="medium">
          <Button type="text" icon={<SearchOutlined />} size="large" />
          <Button type="text" icon={<BellOutlined />} size="large" />
          <Dropdown
            menu={{ items: [mobileActionItems[0], mobileActionItems[3]] }}
            placement="bottomRight"
            trigger={["click"]}
          >
            <Button type="text" icon={<MoreOutlined />} size="large" />
          </Dropdown>
        </Space>
      );
    } else {
      // Desktop: Show all buttons
      return (
        <Space size="large">
          <Button type="text" icon={<AppstoreOutlined />} size="large" />
          <Button type="text" icon={<SearchOutlined />} size="large" />
          <Button type="text" icon={<BellOutlined />} size="large" />
          <Button type="text" icon={<QuestionCircleOutlined />} size="large" />
        </Space>
      );
    }
  };

  // Render user section based on screen size
  const renderUserSection = () => {
    if (screenSize === "mobile") {
      return (
        <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" arrow>
          <Avatar
            icon={<UserOutlined />}
            size="small"
            style={{ cursor: "pointer" }}
          />
        </Dropdown>
      );
    } else {
      return (
        <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" arrow>
          <Button
            type="text"
            style={{
              display: "flex",
              alignItems: "center",
              padding: 0, // remove extra padding since we handle inside pill
              height: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#4096ff",
                borderRadius: "99px",
                padding: "6px 14px", // better balance than 0.1px
                color: "white",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: 1.4,
              }}
            >
              <span>Emma Mackey</span>
              <Avatar
                icon={<UserOutlined />}
                size="small"
                style={{
                  backgroundColor: "white",
                  color: "#4096ff",
                  fontSize: "14px",
                }}
              />
            </div>
          </Button>
        </Dropdown>
      );
    }
  };

  return (
    <>
      <AntHeader
        style={{
          padding: screenSize === "mobile" ? "0 12px" : "0 16px",
          background: "#fff",
          borderBottom: "1px solid #f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: screenSize === "mobile" ? "56px" : "78px",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flex: screenSize === "mobile" ? "1" : "none",
            minWidth: 0, // Allow shrinking
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={onToggle}
            style={{
              fontSize: "16px",
              width: screenSize === "mobile" ? 48 : 64,
              height: screenSize === "mobile" ? 48 : 64,
            }}
          />
          {screenSize !== "mobile" && (
            <img
              src={ENCORE_LOGO_DARK}
              alt="Logo"
              style={{
                height: screenSize === "tablet" ? 32 : 40,
                marginLeft: screenSize === "tablet" ? 12 : 16,
              }}
            />
          )}
        </div>

        {/* Right Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: screenSize === "mobile" ? 8 : 16,
          }}
        >
          {renderActionButtons()}
          {renderUserSection()}
        </div>
      </AntHeader>

      {/* Banner */}
      <Alert
        message="Provider Appointment"
        type="info"
        showIcon={false}
        style={{
          margin:
            screenSize === "mobile"
              ? "12px 12px 0 12px"
              : screenSize === "tablet"
              ? "14px 16px 0 16px"
              : "16px 24px 0 24px",
          fontWeight: "bold",
          backgroundColor: "#4096ff",
          fontSize: screenSize === "mobile" ? "14px" : "15px",
        }}
      />

      {/* Mobile Actions Drawer (optional enhancement) */}
      <Drawer
        title="Actions"
        placement="right"
        onClose={hideMobileMenu}
        open={mobileMenuVisible}
        width={280}
        bodyStyle={{ padding: 0 }}
      >
        <div style={{ padding: "16px" }}>
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            {mobileActionItems.map((item) => (
              <Button
                key={item.key}
                type="text"
                icon={item.icon}
                size="large"
                block
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 12,
                  padding: "12px 16px",
                  height: "auto",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Space>
        </div>
      </Drawer>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 575px) {
          .ant-layout-header {
            position: sticky;
            top: 0;
            z-index: 100;
          }

          .ant-alert {
            border-radius: 4px !important;
          }
        }

        @media (max-width: 991px) {
          .ant-space-item {
            margin-right: 8px !important;
          }
        }

        /* Ensure proper touch targets on mobile */
        @media (max-width: 575px) {
          .ant-btn {
            min-width: 44px;
            min-height: 44px;
          }

          .ant-avatar {
            min-width: 32px;
            min-height: 32px;
          }
        }

        /* Tablet optimizations */
        @media (min-width: 576px) and (max-width: 991px) {
          .ant-btn {
            min-width: 40px;
            min-height: 40px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
