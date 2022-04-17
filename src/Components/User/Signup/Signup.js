import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import signup1 from "../../../images/Login/Signup.jpg";
import signup2 from "../../../images/Login/sign-up.jpg";

const Signup = () => {
  const [agree, setAgree] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container mb-5 mt-5">
      <div className="w-100">
        <img
          style={{ height: "300px" }}
          src={signup2}
          className="img-fluid d-block d-md-none mx-auto m-5"
          alt=""
        />
      </div>
      <div class="card mb-3  border-0">
        <div class="row g-0">
          <div class="col-md-6">
            <img
              src={signup1}
              class="img-fluid rounded-start d-md-block d-none"
              alt="..."
            />
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <div className="w-100 mx-auto">
                <h1 className="text-primary text-center mt-2">
                  Please Sign Up
                </h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3 mt-3" controlId="formBasicName">
                    <Form.Control
                      type="text"
                      className="py-4"
                      placeholder="Enter your name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      className="py-4"
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      className="py-4"
                      placeholder="Password"
                    />
                  </Form.Group>
                  {/* <p>{error?.message}</p>
        <p>{resetError?.message}</p> */}
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      onClick={() => setAgree(!agree)}
                      className={agree ? "text-success" : ""}
                      type="checkbox"
                      label="Accept Genius Car Terms and Condition"
                    />
                  </Form.Group>
                  <Button
                    className="w-100 rounded-pill d-block mx-auto fs-4 mb-4"
                    variant="primary"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </Form>
                <p className=" text-center mt-2">
                  Already have an account?
                  <Link
                    to="/login"
                    //   onClick={handleNavigate}
                    className="text-primary text-decoration-none px-2"
                  >
                    Please Login
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

export default Signup;
