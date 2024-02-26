import React from "react";
import footer_logo from "../../images/eshop-high-resolution-logo-white-transparent.png";
import "./footer.css";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
export default function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row footer_sections">
        <div className="col-3 footer_logo">
          <img src={footer_logo} alt="Logo" />
          <div className="contact_details">
            <ul>
              <li>
                <span>
                  <PhoneInTalkOutlinedIcon className="footer_icons" />
                </span>
                <span className="contact_info">(954)-0840-758</span>
              </li>
              <li>
                <span>
                  <EmailOutlinedIcon className="footer_icons" />
                </span>
                <span className="contact_info">eshop@gmail.com</span>
              </li>
              <li>
                <span>
                  <LocationOnOutlinedIcon className="footer_icons" />
                </span>
                <span className="contact_info">
                  3812 Ranchview Dr. Richardson,
                </span>
                <div className="state">California 62639</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-3 information_section">
          <span>Information</span>
          <ul>
            <li>My Account</li>
            <li>Login</li>
            <li>My Cart</li>
            <li>My Wishlist</li>
            <li>Checkout</li>
          </ul>
        </div>
        <div className="col-3 information_section">
          <span>Service</span>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="col-3 information_section">
          <span>Subscribe</span>
          <div className="subscribe_text">
            Enter your email below to be the first to know
            <br />
            about new collections and product launches
          </div>
          <div className="email_input">
            <EmailOutlinedIcon
              sx={{
                color: "white",
                position: "relative",
                left: "10px",
                fontSize: "1.2rem",
              }}
            />
            <input type="text" placeholder="Your Email" />
            <ArrowForwardOutlinedIcon
              sx={{
                color: "white",
                position: "relative",
                right: "30px",
                fontSize: "1.2rem",
              }}
            />
          </div>
        </div>
        <hr />
        <div className="payment_methods"></div>
        <div className="rights">©2024 eShop All Rights are reserved</div>
        <div className="social_icons"></div>
      </div>
    </div>
  );
}
