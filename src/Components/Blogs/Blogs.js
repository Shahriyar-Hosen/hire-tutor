import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Blogs.css";
import AuthenticationVsAuthorization from "../../images/Authentication-vs-Authorization.png";

const Blogs = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4 container mx-auto my-5">
      
      <Col>
        <Card>
          <Card.Img variant="top" src={AuthenticationVsAuthorization} />
          <Card.Body>
            <Card.Title className="text-info fw-bold">{`অথোরাইজেশন এবং অথেন্টিকেশনের মধ্যে পার্থক্য(Difference between authorization and authentication)`}</Card.Title>
            <Card.Text>
              <h5 className="fw-bold text-dark">Authentication:</h5>
              <p className="fs-6">{`Authentication হলো ওয়েবসাইটে লগইন করার সময় Username এবং  password OTP বা Login method এর মাধ্যমে যাচাই করা যে এটা  validate user কিনা যদি Valid user হয় তাহলে ওয়েবসাইটে প্রবেশ করতে দেওয়া হবে, আর না হলে ওয়েবসাইটে প্রবেশ করতে দেওয়া হবে না।`}</p>
              <h5 className="fw-bold text-dark">Authorization:</h5>
              <p className="fs-6">{`Authorization হলো Authentication user এর একটি নির্দিষ্ট সংস্থানে অ্যাক্সেস আছে কিনা তা পরীক্ষা করা। অর্থাৎ user Login হওয়ার পরে  ওয়েবসাইটের নির্দিষ্ট কোন অংশের এক্সেস আছে কিনা তা চেক করা। যদি  অনুমতি থাকে তাহলে সেখানে ঢুকতে দেবে আর না থাকলে সেই নির্দিষ্ট স্থান বাদে যে সকল জায়গায় অনুমতি দেওয়া আছে সেগুলো তে ঢুকতে পারবে।`}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Blogs;
