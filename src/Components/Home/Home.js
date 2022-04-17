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
          <p className="px-5">Are you looking for a qualified tutor for your child? Then you have come to the right place</p>
        </div>
      </div>
      <Services></Services>
      <HireMe></HireMe>
    </div>
  );
};

export default Home;
