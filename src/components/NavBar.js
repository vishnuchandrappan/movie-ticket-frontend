import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="info" expand="sm">
        <Navbar.Brand>
          <Link to="/">Movie Booking</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>Movies</Nav.Link>
            <NavDropdown title="Login/Signup" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/login">Login</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/signup">Signup</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
