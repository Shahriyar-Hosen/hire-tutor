import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/math-and-science.jpg";

const HireMe = () => {
  return (
    <div className="m-t-b">
      <h1 className="text-info text-center fw-bold">For That Reason Hire Me</h1>
      <div className="card my-5 container">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title text-info mt-3">
                Hey kids! Now math and science at your fingertips.
              </h3>
              <div className="card-text mt-4 fs-5 text-dark">
                <p>
                  I am a passionate math and science teacher and have more than
                  3 years of teaching experience. And yes I'm here to help you.
                  My teaching style is both efficient and easy. I want you to go
                  through the adventures of science and the rough and difficult
                  problems of mathematics. I will also help you to create
                  question bank and worksheet. I guarantee 100% quality work
                  which helps my students to excel!
                </p>

                <h5 className="mt-4 fs-4 fw-bold">Specification:</h5>

                <p className="mb-5">
                  Classes of your choice will be Skype, Zoom or Google Meet.{" "}
                  <br />
                  The mode of communication is Bangla and English. <br />
                  Availability 24/7
                </p>
              </div>
              <div className="d-md-flex justify-content-between align-items-center text-center">
                <p className="card-text text-success ">
                  Feel free to contact us for details of the order.
                </p>
                <Link to="/about" className="btn btn-success fs-6 py-2 rounded">
                  Details info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
