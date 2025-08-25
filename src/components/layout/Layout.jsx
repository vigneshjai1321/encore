import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Home from "../../pages/Home/Home";   // import Home here
import "./Layout.css";

const Layout = ({ children }) => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="main-layout">
      <Sidebar isSidebarCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      <div className={`content-wrapper ${isSidebarCollapsed ? "collapsed" : ""}`}>
        <Header />
        <main className="page-content">
          {children || <Home />}   {/* Show Home if no child route */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
