import React from "react";
import footer_logo from "../../images/e-shop-high-resolution-logo-black.png";
import "./footer.css";

export default function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="footer_logo">
        <img src={footer_logo} alt="Logo" />
      </div>
    </div>
  );
}
