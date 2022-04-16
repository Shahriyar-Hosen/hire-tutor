import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, img, price, details } = service;
  return (
    <div className="mb-2 p-2 d-flex justify-content-start align-items-center">
      <div className="mx-4">
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="text-info">{name}</h4>
        <p>{details}</p>
        <div className="d-flex justify-content-around align-items-start">
          <h5 className="text-primary">Price: {price}</h5>
          <Link to="/checkout" className="btn btn-primary py-0 px-5 text-decoration-none ">Hire A Tutor </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
