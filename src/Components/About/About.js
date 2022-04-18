import React from "react";
import { Card } from "react-bootstrap";

const About = () => {
  return (
    <Card className="container">
      <Card.Img variant="top"  style={{ width: "18rem" }} className='d-block mx-auto' src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default About;
