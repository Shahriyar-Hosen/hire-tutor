import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="w-50 mx-auto">
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button
          className="w-100 rounded-pill d-block mx-auto mb-4"
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
      <p className=" text-center mt-2">
        Now to Genius car?
        <Link
          to="/register"
          //   onClick={handleNavigate}
          className="text-primary text-decoration-none"
        >
          Please Register
        </Link>
      </p>
      <p className=" text-center mt-2">
        Forget Password?
        <Link
          to="/login"
          //   onClick={resetPassword}
          className="text-primary text-decoration-none"
        >
          Reset Password
        </Link>
      </p>
      {/* <SocialLogin></SocialLogin> */}
    </div>
  );
};

export default Login;
