import React from "react";
import { Card } from "react-bootstrap";
import salman from "../../images/salman/salman.jpeg";

const About = () => {
  return (
    <div className="container">
      <Card className="mt-5 mb-5">
        <Card.Img
          variant="top"
          className="d-block mx-auto rounded w-50 rounded"
          src={salman}
        />
        <Card.Body>
          <Card.Title className="text-info text-center fs-3">
          My Goal For The Next Five Months
          </Card.Title>
          <Card.Text className="text-black fs-6">
          My first goal in the next 5 months is to become a hard work web developer. At least five professional websites created with my highest qualifications and skills. To work towards this goal every day. Complete daily modules daily during the course and complete all daily practice daily. Trying to do the same or a little more than in the past. Creating and completing small goals every day.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
