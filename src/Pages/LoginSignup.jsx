import React from "react";
import "./CSS/LoginSignup.css";
import icon from "../Components/Assets/icons-i-32.png";
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup_container">
        <h1>Sign Up</h1>
        <div className="loginsignup_fields">
          <input
            style={{ cursor: `url(${icon}),auto` }}
            type="text"
            placeholder="Your Name"
          />
          <input
            style={{ cursor: `url(${icon}),auto` }}
            type="email"
            placeholder="Email Address"
          />
          <input
            style={{ cursor: `url(${icon}),auto` }}
            type="password"
            placeholder="Password"
          />
        </div>
        <button aria-label="Continue">Continue</button>
        <p className="loginsignup_login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsignup_agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
