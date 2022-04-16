import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="info" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link
            to="/home"
            className="text-decoration-none text-dark fs-3 fw-bold"
          >
            Hire Tutor
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/link" className="text-decoration-none text-dark">
                Blogs
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="text-decoration-none text-dark">
                About
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/login" className="text-decoration-none text-dark">
                Login
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Link to="/signup" className="text-decoration-none text-dark">
                Sign Up
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
