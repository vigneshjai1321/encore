import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Sidebar.css";
import encoreLogo from "../../assets/images/Encore-Logo-Horizontal.svg"; 

const Sidebar = ({ isSidebarCollapsed }) => {
  const [openDropdown, setOpenDropdown] = useState("");

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? "" : dropdownName);
  };

 
  const fakeDropdownContent = ["Sub Item 1", "Sub Item 2", "Sub Item 3"];

  return (
    <div className={`sidebar-wrapper ${isSidebarCollapsed ? "collapsed" : ""}`}>
     
      {!isSidebarCollapsed && <img src={encoreLogo} alt="Encore Logo" className="sidebar-logo" />}

      <Nav className="flex-column sidebar">
       
        <div className="new-order-btn-container">
          <Link to="" className="new-order-btn">
            <i className="bi bi-plus-lg"></i>
            <span>NEW ORDER</span>
          </Link>
        </div>

       
        <Nav.Item>
          <div
            className="sidebar-link"
            onClick={() => handleDropdownToggle("bookmarks")}
          >
            <i
              className={`link-chevron bi bi-chevron-right ${openDropdown === "bookmarks" ? "open" : ""
                }`}
            ></i>
            <i className="bi bi-bookmark"></i>
            <span className="link-text">BOOKMARKS</span>
            <i className="link-icon-right bi bi-pencil"></i>
          </div>

          {!isSidebarCollapsed && (
            <ul
              className={`dropdown-menu ${openDropdown === "bookmarks" ? "open" : ""
                }`}
            >
              <li>
                <Link to="/home" className="dropdown-item">
                  Home 🏠
                </Link>
              </li>
              {fakeDropdownContent.map((item) => (
                <li key={item}>
                  <Link to="#" className="dropdown-item">
                    {item} 🔹
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Nav.Item>

        {/* --- Menu Dropdown --- */}
        <Nav.Item>
          <div
            className="sidebar-link"
            onClick={() => handleDropdownToggle("menu")}
          >
            <i
              className={`link-chevron bi bi-chevron-right ${openDropdown === "menu" ? "open" : ""
                }`}
            ></i>
            <i className="bi bi-house-door"></i>
            <span className="link-text">MENU</span>
            <i className="link-icon-right bi bi-pencil"></i>
          </div>

          {!isSidebarCollapsed && (
            <ul
              className={`dropdown-menu ${openDropdown === "menu" ? "open" : ""
                }`}
            >
              {fakeDropdownContent.map((item) => (
                <li key={item}>
                  <Link to="#" className="dropdown-item">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Nav.Item>

        {/* --- Flyout Items --- */}
        <Nav.Item>
          <Nav.Link as={Link} to="/appointment" className="sidebar-link">
            <i className="bi bi-calendar-date"></i>
            <span className="link-text">APPOINTMENT</span>
            <i className="link-icon-right bi bi-chevron-right"></i>
            {/* Flyout Menu */}
            <ul className="flyout-menu">
              {fakeDropdownContent.map(item => <li key={item}><Link to="#" className="flyout-item">{item}</Link></li>)}
            </ul>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/clinical-notes" className="sidebar-link">
            <i className="bi bi-journal-text"></i>
            <span className="link-text">CLINICAL NOTES</span>
            <i className="link-icon-right bi bi-chevron-right"></i>
            <ul className="flyout-menu">
              {fakeDropdownContent.map(item => <li key={item}><Link to="#" className="flyout-item">{item}</Link></li>)}
            </ul>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/form-tools" className="sidebar-link">
            <i className="bi bi-pencil-square"></i>
            <span className="link-text">FORM TOOLS</span>
            <i className="link-icon-right bi bi-chevron-right"></i>
            <ul className="flyout-menu">
              {fakeDropdownContent.map(item => <li key={item}><Link to="#" className="flyout-item">{item}</Link></li>)}
            </ul>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/residents" className="sidebar-link">
            <i className="bi bi-people"></i>
            <span className="link-text">RESIDENTS</span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/setup" className="sidebar-link">
            <i className="bi bi-gear"></i>
            <span className="link-text">SETUP</span>
            <i className="link-icon-right bi bi-chevron-right"></i>
            <ul className="flyout-menu">
              {fakeDropdownContent.map(item => <li key={item}><Link to="#" className="flyout-item">{item}</Link></li>)}
            </ul>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/report" className="sidebar-link">
            <i className="bi bi-file-earmark-bar-graph"></i>
            <span className="link-text">REPORT</span>
            <i className="link-icon-right bi bi-chevron-right"></i>
            <ul className="flyout-menu">
              {fakeDropdownContent.map(item => <li key={item}><Link to="#" className="flyout-item">{item}</Link></li>)}
            </ul>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;