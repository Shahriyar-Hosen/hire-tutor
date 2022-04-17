import React from "react";
import Services from "../Services/Services";
import "./Home.css";
import image from "../../images/math-and-science.jpg";

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
        <Services></Services>
      </div>
      <div className="m-t-b">
        <h1 className="text-info text-center">For That Reason Hire Me</h1>
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
                <div className="card-text mt-4">
                  <p>
                    I am a passionate math and science teacher and have more
                    than 3 years of teaching experience. And yes I'm here to
                    help you. My teaching style is both efficient and easy. I
                    want you to go through the adventures of science and the
                    rough and difficult problems of mathematics. I will also
                    help you to create question bank and worksheet. I guarantee
                    100% quality work which helps my students to excel!
                  </p>

                  <h5 className="mt-4">Specification:</h5>

                  <p className="mb-5">
                    Classes of your choice will be Skype, Zoom or Google Meet.{" "}
                    <br />
                    The mode of communication is Bangla and English. <br />
                    Availability 24/7
                  </p>
                </div>
                <p className="card-text">
                  <small className="text-success ">
                    Feel free to contact us for details of the order.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
