import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import login from "../../../images/Login/Login.jpg";
import user from "../../../images/Login/user.jpg";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="container mb-5">
      <div className="w-100">
        <img
          style={{ height: "300px" }}
          src={user}
          className="img-fluid d-block mx-auto"
          alt=""
        />
      </div>
      <div class="card mb-3  border-0">
        <div class="row g-0">
          <div class="col-md-6">
            <img
              src={login}
              class="img-fluid rounded-start d-md-block d-none"
              alt="..."
            />
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <div className="w-100 mx-auto">
                <h1 className="text-primary text-center mt-2">Please Login</h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  {/* <p>{error?.message}</p>
        <p>{resetError?.message}</p> */}
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicCheckbox"
                  ></Form.Group>
                  <Button
                    className="w-100 rounded-pill d-block mx-auto mb-4"
                    variant="primary"
                    type="submit"
                  >
                    Login
                  </Button>
                </Form>
                <p className=" text-center mt-2">
                  New User?
                  <Link
                    to="/register"
                    //   onClick={handleNavigate}
                    className="text-primary text-decoration-none px-2"
                  >
                    Please Register
                  </Link>
                </p>
                <p className=" text-center mt-2">
                  Forget Password?
                  <Link
                    to="/login"
                    //   onClick={resetPassword}
                    className="text-primary text-decoration-none px-2"
                  >
                    Reset Password
                  </Link>
                </p>
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
