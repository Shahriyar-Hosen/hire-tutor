import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <MDBFooter color="black" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left container">
          <MDBRow>
            <MDBCol md="6">
              <h2 className="title">Connect</h2>
              <h5>Phone: 015xxxxxxxx</h5>
              <h5>
                <span>Address: </span>
                <small>
                  Flat 3A, House 26, <br /> Road Alawul Avenue, <br />
                  Sector 6, Uttara Dhaka, <br />
                  Bangladesh
                </small>
              </h5>
            </MDBCol>
            <MDBCol md="6">
              <h2 className="title my-3">Social</h2>
              <div>
                <p className="">
                  <Link to="https://www.facebook.com/">
                    <img
                      src="https://i.ibb.co/yhLpRSJ/fb-icon.png"
                      style={{ height: "20px" }}
                      className="mx-2"
                      alt=""
                    />{" "}
                    Facebook
                  </Link>
                </p>
                <p className="">
                  <Link to="https://www.linkedin.com/">
                    {" "}
                    <img
                      src="https://i.ibb.co/hLCyjxJ/in-icon.png"
                      style={{ height: "20px" }}
                      className="mx-2"
                      alt=""
                    />{" "}
                    Linkedin
                  </Link>
                </p>
                <p className="">
                  <Link to="https://www.youtube.com/">
                    <img
                      src="https://i.ibb.co/qrz1Vvb/You-Tube-icon.webp"
                      style={{ height: "15px" }}
                      className="mx-2"
                      alt=""
                    />{" "}
                    Youtube
                  </Link>
                </p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.mdbootstrap.com"> Hire Tutor </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
