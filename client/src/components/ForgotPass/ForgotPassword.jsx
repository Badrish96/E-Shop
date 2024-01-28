import React from "react";
import ForgotPassword_img from "../../images/forgotPassword_img.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./forgotPassword.css";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const handleBackOption = () => {
    navigate("/");
  };

  const handleOtpBtn = () => {
    navigate("/otp");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <div className="forgotPassword_banner">
            <img
              src={ForgotPassword_img}
              alt="Forgot Password Banner"
              className="forgotPassword_img"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="forgotPassword_content">
            <div className="back_option" onClick={handleBackOption}>
              <ArrowBackIosIcon />
              <span>Back</span>
            </div>
            <h3>Forgot Password</h3>
            <span>
              Enter your registered email address. we’ll send you a code to
              <br />
              reset your password.
            </span>
            <form className="forgotPassword_input">
              <div>
                <label>Email Address</label>
              </div>
              <input type="text" className="form_inputs" />
              <button onClick={handleOtpBtn}>Send OTP</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
