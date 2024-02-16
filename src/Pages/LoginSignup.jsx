import React, { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CSS/LoginSignup.css";
import icon from "../Components/Assets/icons-i-32.png";
import CustomHelmet from "../Components/Helmet/Helmet";

const LoginSignup = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

   
    if (!name || !email || !password || !agree) {
      toast.error("All fields are required. Please fill in all the details.", {autoClose: 1500,});
      return;
    }

    const apiUrl = "https://api.emailjs.com/api/v1.0/email/send";

    const serviceId = "service_3wrl08p";
    const templateId = "template_81rajgj";
    const publicKey = "uN_7-zy5LHR6ZT1e3";

    try {
      setSubmitting(true);

      const templateParams = {
        name: name,
        email: email,
        password: password,
        agree: agree ? "Yes" : "No",
      };

      const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: templateParams,
      };

      await axios.post(apiUrl, data);

      toast.success("Signup successful!", { autoClose: 1500 });
      setName("");
      setEmail("");
      setPassword("");
      setAgree(false);
    } catch (error) {
      console.error("Email failed to send:", error);

      toast.error("Failed to submit the form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  const title="TRENDY - Login/Signup"

  return (
    <>
    <CustomHelmet title={title}/>
    <form ref={form} onSubmit={sendEmail}>
      <div className="loginsignup">
        <div className="loginsignup_container">
          <h1>Sign Up</h1>
          <div className="loginsignup_fields">
            <input
              style={{ cursor: `url(${icon}),auto` }}
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              style={{ cursor: `url(${icon}),auto` }}
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              style={{ cursor: `url(${icon}),auto` }}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" aria-label="Continue" disabled={submitting}>
            Continue
          </button>
          <p className="loginsignup_login">
            Already have an account? <span>Login here</span>
          </p>
          <div className="loginsignup_agree">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={agree}
              onChange={() => setAgree(!agree)}
            />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </div>
    </form>
    </>
  );
};

export default LoginSignup;
