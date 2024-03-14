import React, { useState } from "react";
import login_banner from "../../images/login_banner.png";
import logo_text from "../../images/e-shop-high-resolution-logo-black.png";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../Slices/authSlice";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    navigate("/forgot");
  };

  //Connecting with API

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post(
        "http://localhost:8080/eshop/api/v1/auth/signin",
        {
          email,
          password,
        }
      );
      dispatch(login(response.data));
      const access = response.data.accessToken;

      window.localStorage.setItem("accessToken", access);

      navigate("/home");
    } catch (err) {
      console.log(`${err} in login`);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <div className="login_banner">
            <div className="logo_text">
              <img src={logo_text} alt="Logo text" className="web_logo" />
            </div>
            <img
              src={login_banner}
              alt="Login Banner"
              className="login_banner_img"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="login_content">
            <h3>Welcome 👋</h3>
            <span>Please login here</span>
            <form className="login_input">
              <div>
                <label>Email Address</label>
              </div>
              <input
                type="text"
                className="form_inputs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div>
                <label>Password</label>
              </div>
              <input
                type="password"
                className="form_inputs"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="form_actions">
                <div className="form_check">
                  <input type="checkbox" className="checkbox" />
                  <span>Remember Me</span>
                </div>
                <div>
                  <a onClick={handleForgotPassword} href="">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button onClick={handleLogin}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
