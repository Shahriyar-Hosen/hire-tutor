import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebase.init/Firebase.init";
import Loading from "../Loading/Loading";

const Header = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    <Loading />;
  }

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="info" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link
            to="/"
            className="text-decoration-none text-warning fs-3 fw-bold pe-5"
          >
            HIRE TUTOR
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                to="/home"
                className="text-decoration-none text-light fw-bold"
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/blogs"
                className="text-decoration-none text-light fw-bold"
              >
                Blogs
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link
                to="/about"
                className="text-decoration-none text-light fw-bold"
              >
                About
              </Link>
            </Nav.Link>
            {user ? (
              <Nav.Link>
                <Link
                  to="/login"
                  onClick={() => signOut(auth)}
                  className="text-decoration-none text-light fw-bold"
                >
                  Sign Out
                </Link>
              </Nav.Link>
            ) : (
              <>
                <Nav.Link>
                  <Link
                    to="/login"
                    className="text-decoration-none text-light fw-bold"
                  >
                    Login
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey={2}>
                  <Link
                    to="/signup"
                    className="text-decoration-none text-light fw-bold"
                  >
                    Sign Up
                  </Link>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
