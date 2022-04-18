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
            {`আমার আগামী পাঁচ মাসের লক্ষ`}
          </Card.Title>
          <Card.Text className="text-black">
            {`আগামী 5 মাসের মধ্যে আমার সর্বপ্রথম লক্ষ্য একজন হার্ডওয়ার্ক ওয়েব ডেভেলপার হওয়া। সর্বনিম্ন পাঁচটা প্রফেশনাল ওয়েবসাইট আমার সর্বোচ্চ যোগ্যতা এবং দক্ষতা দিয়ে তৈরি করা। এই লক্ষ্যে প্রতিদিন কাজ করে যাওয়া। কোর্স চলাকালীন প্রতিদিনের মডিউল প্রতিদিন শেষ করা এবং প্রতিদিনের সকল প্র্যাকটিস প্রতিদিন শেষ করা। বিগত দিনগুলোর মতো করে বা তার থেকে একটু বেশি করার চেষ্টা করা। প্রতিদিন ছোট ছোট লক্ষ্য তৈরি করা এবং সম্পূর্ণ করা।`}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
