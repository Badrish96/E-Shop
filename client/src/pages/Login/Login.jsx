import React from "react";
import login_banner from "../../images/login_banner.png";
import logo_text from "../../images/Logo + Text.png";
import { useNavigate } from "react-router-dom";
import "./login.css";
export default function Login() {
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    navigate("/forgot");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <div className="login_banner">
            <div className="logo_text">
              <img src={logo_text} alt="Logo text" />
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
              <input type="text" className="form_inputs" />
              <div>
                <label>Password</label>
              </div>
              <input type="password" className="form_inputs" />
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
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
