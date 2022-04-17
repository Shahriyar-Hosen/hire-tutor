import React from "react";
import Services from "../Services/Services";
import HireMe from "./HireMe/HireMe";
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
      <Services></Services>
      <HireMe></HireMe>
    </div>
  );
};

export default Home;
