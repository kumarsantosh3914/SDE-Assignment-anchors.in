/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import Otp from "../Otp/Otp";
import emailjs from "@emailjs/browser";

const Signup = () => {
  const [error, setError] = useState("");
  const [otp, setOtp] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [optvalue, setOptvalue] = useState("");
  const [id, setId] = useState("");
  emailjs.init("diEZ6h21fsoPHUGxm");
  const registerHandler = async () => {
    if (!username || !email || !password) {
      setError("Please fill all the fields");
    } else {
      const res = await fetch(
        "https://anchors-discussion-forum-backend.vercel.app/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        }
      );
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setId(data._id);
        setOptvalue(data.otp);
        localStorage.setItem("_id", data._id);
        localStorage.setItem("username", data.username);
        localStorage.setItem("email", data.email);
        emailjs.send("service_drmc1tb", "template_bac8np2", {
          user_name: username,
          email: email,
          otp: data.otp,
        });
        setOtp(false);
      }
    }
  };
  return (
    <div className="sign1up">
      <div className="main">
        {otp ? (
          <div className="signup_form_left">
            <div className="signup">
              <div className="signup_main">Create Your Account</div>
              <div className="signup_form_main">
                <div className="username w-99">
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter your user name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="inp"
                  />
                </div>
                <div className="email w-99">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="inp"
                  />
                </div>
                <div className="password w-99">
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="inp"
                  />
                </div>

                {error && <div className="error">{error}</div>}

                <button onClick={registerHandler} className="signup_button btn">
                  <Link to="/login" className="signup_text btn">
                    Continue
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Otp otp={optvalue} username={username} email={email} id={id} />
        )}
      </div>
    </div>
  );
};

export default Signup;
