import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../images/NotFound.jpg";

const NotFound = () => {
  return (
    <div className="container text-center">
      <img
        src={notFound}
        className="w-50 d-block mx-auto my-5"
        alt=""
      />
      <Link to='/' className="btn btn-info mb-5 px-5 fs-5">Back to Home</Link>
    </div>
  );
};

export default NotFound;
