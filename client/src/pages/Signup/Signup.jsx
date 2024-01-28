import React from "react";
import signup_banner from "../../images/signup_banner.png";
import logo_text from "../../images/e-shop-high-resolution-logo-black.png";
import "./signup.css";
export default function Signup() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <div className="login_banner">
            <div className="logo_text">
              <img src={logo_text} alt="Logo text" />
            </div>
            <img
              src={signup_banner}
              alt="Login Banner"
              className="login_banner_img"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="signup_content">
            <h3>Create New Account</h3>
            <span>Please enter details</span>
            <form className="login_input">
              <div>
                <label>First Name</label>
              </div>
              <input type="text" className="form_inputs" />
              <div>
                <label>Last Name</label>
              </div>
              <input type="text" className="form_inputs" />
              <div>
                <label>Email address</label>
              </div>
              <input type="text" className="form_inputs" />
              <div>
                <label>Password</label>
              </div>
              <input type="password" className="form_inputs" />
              <div className="form_actions">
                <div className="form_check">
                  <input type="checkbox" className="checkbox" />
                  <span>I agree to the Terms & Conditions</span>
                </div>
              </div>
              <button>Signup</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
