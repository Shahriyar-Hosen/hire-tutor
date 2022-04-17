import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className=" m-t-b">
      <h1 className="text-center fs-1 fw-bold text-info">
        Tuition Types
      </h1>
      <div className="row row-cols-1 row-cols-md-2 g-2 container mx-auto my-5">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
