import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, img, price, details } = service;
  return (
    <div className="p-2 d-flex justify-content-start align-items-center">
      <div>
        <div className="card container ">
          <div className="row g-0">
            <div className="col-md-4 my-md-auto mt-5">
              <img src={img} className="img-fluid rounded-start mx-auto d-block my-auto" alt="" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title text-info mt-3">
                {name}
                </h3>
                <div className="card-text mt-4">
                <p>{details}</p>
                </div>
                <div className="d-flex justify-content-around align-items-start">
                  <h5 className="text-primary">Price: {price}</h5>
                  <Link
                    to="/checkout"
                    className="btn btn-primary py-1 px-4 text-decoration-none "
                  >
                    Hire A Tutor{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
