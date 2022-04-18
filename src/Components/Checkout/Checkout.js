import React from "react";
import { Button, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import formImg from '../../images/form.jpg'
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const phone = event.target.phone.value;
    const address = event.target.address.value;

    toast("Thank you for Booking")
    console.log(name, email, password, phone, address);
  };
  return (
    <div className="container mb-5 mt-5">
      <div className="card mb-3  border-0">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={formImg}
              className="img-fluid rounded-start d-md-block d-none"
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <div className="w-100 mx-auto">
                <h1 className="text-primary text-center mt-2">Booking Form</h1>
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
                  <Form.Group
                    className="mb-3 fs-5"
                    controlId="formBasicPassword"
                  >
                    <Form.Control
                      required
                      type="text"
                      name="phone"
                      className="py-4"
                      placeholder="Phone"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 fs-5"
                    controlId="formBasicPassword"
                  >
                    <Form.Control
                      required
                      type="text"
                      name="address"
                      className="py-4"
                      placeholder="Address"
                    />
                  </Form.Group>
                  {/* <p>{error?.message}</p> */}

                  <Button
                    className="w-100 rounded-pill d-block mx-auto fs-4 mb-4"
                    variant="primary"
                    type="submit"
                  >
                    submit
                  </Button>
                </Form>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
