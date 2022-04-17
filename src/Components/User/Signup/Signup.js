import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import signup1 from "../../../images/Login/Signup.jpg";
import signup2 from "../../../images/Login/sign-up.jpg";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init/Firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Signup = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    

  if (loading) {
   return <Loading />;
  }

  if (user) {
    console.log(user);
    navigate("/home");
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password);
    console.log(name, email, password);
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
      <div className="card mb-3  border-0">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={signup1}
              className="img-fluid rounded-start d-md-block d-none"
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <div className="w-100 mx-auto">
                <h1 className="text-primary text-center mt-2">
                  Please Sign Up
                </h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    className="mb-3 mt-3  fs-5"
                    controlId="formBasicName"
                  >
                    <Form.Control
                    required
                      type="text"
                      name="name"
                      className="py-4"
                      placeholder="Enter your name"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 mt-3  fs-5"
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                    required
                      type="email"
                      name="email"
                      className="py-4"
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 fs-5"
                    controlId="formBasicPassword"
                  >
                    <Form.Control
                    required
                      type="password"
                      name="password"
                      className="py-4"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <p>{error?.message}</p>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      onClick={() => setAgree(!agree)}
                      className={agree ? "text-success" : ""}
                      type="checkbox"
                      label="Accept All Terms and Condition"
                    />
                  </Form.Group>
                  <Button
                    disabled={!agree}
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
