import React from "react";
import "./enterOtp.css";
import EnterOtp_banner from "../../images/Enter OTP.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
export default function EnterOtp() {
  const navigate = useNavigate();

  const handleBackBtn = () => {
    navigate("/");
  };

  const handleBackOption = () => {
    navigate("/forgot");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <div className="EnterOtp_banner">
            <img
              src={EnterOtp_banner}
              alt="Enter OTP Banner"
              className="EnterOtp_img"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="EnterOtp_content">
            <div className="back_option" onClick={handleBackOption}>
              <ArrowBackIosIcon />
              <span>Back</span>
            </div>
            <h3>Enter OTP</h3>
            <span>
              We have share a code of your registered email address
              <br />
              robertfox@example.com
            </span>
            <form className="EnterOtp_input">
              <div className="EnterOtp_box">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
              <button
                type="button"
                className="btn btn-primary verify_btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Verify
              </button>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="verified_symbol">
                      <div className="outerMost_circle">
                        <div className="outer_circle">
                          <div className="circle">
                            <CheckCircleRoundedIcon className="check_circle" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dialog_heading">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Password Changed Successfully
                      </h1>
                    </div>
                    <div className="Success_msg">
                      <span>Your password has been updated successfully</span>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="back_btn"
                        onClick={handleBackBtn}
                      >
                        Back to Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
