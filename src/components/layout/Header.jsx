import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Header.css";
import Logo from "../../assets/images/logowithicon_ewc.png";

const Header = () => {
  return (
    <>
      <Navbar bg="white" expand="lg" className="header shadow-sm sticky-top">
        <Navbar.Brand href="#home" className="d-flex align-items-center ms-3">
          <img
            src={Logo}
            alt="Logo"
            width="200"
            height="50"
            className="me-2"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link href="#home">
              <i className="bi bi-grid-3x3-gap-fill fs-5"></i>
            </Nav.Link>
            <Nav.Link href="#link">
              <i className="bi bi-search fs-5"></i>
            </Nav.Link>
            <Nav.Link href="#link">
              <i className="bi bi-bell-fill fs-5"></i>
            </Nav.Link>
            <Nav.Link href="#link">
              <i className="bi bi-question-circle-fill fs-5"></i>
            </Nav.Link>

            {/* User Dropdown */}
            <Dropdown align="end">
              <Dropdown.Toggle id="dropdown-basic" className="user-dropdown">
                <span className="me-2">Emma Mackey</span>
                <i className="bi bi-person-circle fs-5"></i>
              </Dropdown.Toggle>

              {/* FIX: floating menu */}
              <Dropdown.Menu popperConfig={{ strategy: "fixed" }}>
                <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
                <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Example Banner */}
      <div className="p-3 bg-info text-white fw-bold rounded my-3 ms-3 me-3">
        Provider Appointment
      </div>
    </>
  );
};

export default Header;
