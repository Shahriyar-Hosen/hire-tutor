import React from "react";
import Services from "../Services/Services";
import ServingCategories from "../ServingCategories/ServingCategories";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="banner-container">
        <div className="banner-title">
          <h2>Hire The Right Tutor Today!</h2>
          <p>Book one-on-one lessons with verified tutors in your area</p>
        </div>
      </div>
      <div>
        <h1 className="text-center fs-1 fw-bold mt-5 text-info">
          Service Tuition Types
        </h1>
        <Services></Services>
        <ServingCategories></ServingCategories>
      </div>
    </div>
  );
};

export default Home;
