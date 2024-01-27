import React from "react";
import ForgotPassword_img from "../../images/forgotPassword_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ForgotPassword() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <div className="login_banner">
            <img
              src={ForgotPassword_img}
              alt="Forgot Password Banner"
              className="login_banner_img"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="login_content">
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
            <span>Back</span>
            <h3>Forgot Password</h3>
            <span>
              Enter your registered email address. we’ll send you a code to
              <br />
              reset your password.
            </span>
            <form className="login_input">
              <div>
                <label>Email Address</label>
              </div>
              <input type="text" className="form_inputs" />
              <button>Send OTP</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
