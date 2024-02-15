import React from "react";
import "./NewsLetter.css";
import icon from "../Assets/icons-i-32.png";
const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input
          style={{ cursor: `url(${icon}),auto` }}
          type="email"
          placeholder="Your Email id"
        />
      <button  aria-label="Subscribe to our newsletter">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
