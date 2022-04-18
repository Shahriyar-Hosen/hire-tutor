import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Blogs.css";
import AuthenticationVsAuthorization from "../../images/Authentication-vs-Authorization.png";
import Firebase from '../../images/firebase.png'

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
      <Col>
        <Card>
          <Card.Img variant="top" src={Firebase} />
          <Card.Body>
            <Card.Title className="text-info fw-bold">{`কেন আপনি ফায়ারবেস ব্যবহার করছেন? Authentication করার জন্য আপনার কাছে অন্য কোন বিকল্প আছে?(Why are you using firebase? What other options do you have to implement authentication?)`}</Card.Title>
            <Card.Text>
              <h5 className="fw-bold text-dark">{`কেন আপনি ফায়ারবেস ব্যবহার করছেন?(Why are you using firebase?) `}</h5>
              <p className="fs-6">{`ফায়ারবেজ এর মাধ্যমে রিয়েল টাইম ডাটা নিয়ে কাজ করা যায়। ওয়েবসাইটের অথেন্টিকেশন অথোরাইজেশন করার ক্ষেত্রে ব্যবহার করা হয়। এছাড়াও  আরো অনেক  অনেক ফিচার  ফায়ারবেজে রয়েছে। অর্থাৎ সাইনিন অ্যাপ্লিকেশনের জন্য ব্যবহার করা যায়। `}</p>
              <h6 className="fw-bold text-dark">{`যে সকল সুবিধার জন্য ফায়ারবেজ ব্যবহার করা হয়ঃ-`}</h6>
              <p className="fs-6">
                <span className="d-block">{`⭐ব্যাকএন্ড সার্ভার ছাড়াই অ্যাপ্লিকেশন তৈরি `}</span>
                <span className="d-block">{`⭐ব্যাকএন্ড সার্ভারের জন্য অতিরিক্ত অর্থ ব্যয় করার দরকার নেই `}</span>
                <span className="d-block">{`⭐অ্যাপ্লিকেশনে রিয়েল টাইম ডেটা নিয়ে কাজ করা যায়`}</span>
                <span className="d-block">{`⭐অ্যাপ্লিকেশনে দ্রুত ডাটা দেখা`}</span>
                <span className="d-block">{`⭐যেকোনো ব্যাকএন্ড ওয়েব  সার্ভিসের চেয়ে দ্রুত`}</span>
                <span className="d-block">{`⭐কোন SQL ডাটাবেস  না থাকায় এটি আরো দ্রুত`}</span>
                <span className="d-block">{`⭐যেকোনো সোশ্যাল নেটওয়ার্কিং লগইন করতে পারা যায় খুব কম লাইন কোড লিখে`}</span>
                <span className="d-block">{`⭐নোটিফিকেশন পাঠানো`}</span>
                <span className="d-block">{`⭐এনালিটিক্স বা বিশ্লেষণ`}</span>
                <span className="d-block">{`⭐ক্র্যাশ রিপোর্ট`}</span>
                <span className="d-block">{`⭐ক্লাউড স্টোরেজ`}</span>
                <span className="d-block">{`⭐টেস্ট ল্যাব`}</span>
                <span className="d-block">{`⭐ডায়নামিক লিঙ্কিং`}</span>
                <span className="d-block">{`⭐স্বয়ংক্রিয় ব্যাকআপ এবং আরও অনেক কিছু…`}</span>
              </p>
              <h5 className="fw-bold text-dark">{`Authentication করার জন্য আপনার কাছে অন্য কোন বিকল্প আছে?(What other options do you have to implement authentication?)`}</h5>
              <p className="fs-6">{`ফায়ারবেজ ইউজ না করলে অথেন্টিকেশন এর জন্য আরো কিছু থার্ড পার্টি অপশন রয়েছে। যেমনঃ `}</p>
              <p className="fs-6">
                <span className="d-block">{`⭐STYTCH`}</span>
                <span className="d-block">{`⭐Ory`}</span>
                <span className="d-block">{`⭐Supabase`}</span>
                <span className="d-block">{`⭐Okta`}</span>
                <span className="d-block">{`⭐PingIdentity`}</span>
                <span className="d-block">{`⭐Keycloak`}</span>
                <span className="d-block">{`⭐Frontegg`}</span>
                <span className="d-block">{`⭐Authress`}</span>
                <span className="d-block">{`⭐Auth0`}</span>
                <span className="d-block">{`⭐Amazon Cognito`}</span>
                <span className="d-block">{`⭐OneLogin`}</span>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
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
