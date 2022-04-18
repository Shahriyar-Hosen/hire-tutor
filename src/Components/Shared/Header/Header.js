import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase.init/Firebase.init";
import Loading from "../Loading/Loading";

const Header = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  if (loading) {
    <Loading />;
  }

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="info" variant="dark">
      <Container>
        <Navbar.Brand>
          <button
            onClick={() => navigate("/")}
            className="text-decoration-none text-warning fs-3 fw-bold pe-5 btn btn-link py-0 px-0"
          >
            HIRE TUTOR
          </button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <button
                onClick={() => navigate("/home")}
                className="text-decoration-none text-light fw-bold fs-6 btn btn-link py-0 px-0"
              >
                Home
              </button>
            </Nav.Link>
            <Nav.Link>
              <button
                onClick={() => navigate("/blogs")}
                className="text-decoration-none text-light fw-bold fs-6 btn btn-link py-0 px-0"
              >
                Blogs
              </button>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <button
                onClick={() => navigate("/about")}
                className="text-decoration-none text-light fw-bold fs-6 btn btn-link py-0 px-0"
              >
                About
              </button>
            </Nav.Link>
            {user ? (
              <Nav.Link>
                <button
                  onClick={() => {
                    navigate("/login");
                    signOut(auth);
                  }}
                  className="text-decoration-none text-light fw-bold fs-6 btn btn-link py-0 px-0"
                >
                  Sign Out
                </button>
              </Nav.Link>
            ) : (
              <>
                <Nav.Link>
                  <button
                    onClick={() => navigate("/login")}
                    className="text-decoration-none text-light fw-bold fs-6 btn btn-link py-0 px-0"
                  >
                    Login
                  </button>
                </Nav.Link>
                <Nav.Link eventKey={2}>
                  <button
                    onClick={() => navigate("/signup")}
                    className="text-decoration-none text-light fw-bold fs-6 btn btn-link py-0 px-0"
                  >
                    Sign Up
                  </button>
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
