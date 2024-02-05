import React from "react";
import "./instaStories.css";
import insta_img1 from "../../images/insta img1.jpg";
import insta_img2 from "../../images/insta img2.jpg";
import insta_img3 from "../../images/insta img3.jpg";
import insta_img4 from "../../images/insta img4.jpg";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

const data = [
  {
    img: insta_img1,
  },
  {
    img: insta_img2,
  },
  {
    img: insta_img3,
  },
  {
    img: insta_img4,
  },
];

const contact_data = [
  {
    icon: <LocalShippingIcon />,
    text: "Free Shipping",
    description: "Free shipping for order above ₹500",
  },
  {
    icon: <MonetizationOnOutlinedIcon />,
    text: "Money Guarantee",
    description: "Within 30 days for an exchange",
  },
  {
    icon: <HeadphonesOutlinedIcon />,
    text: "Online Support",
    description: "24 hours a day, 7 days a week",
  },
  {
    icon: <CreditCardOutlinedIcon />,
    text: "Flexible Payment",
    description: "Pay with visa/master cards",
  },
];

export default function InstaStories() {
  return (
    <div className="container">
      <div className="stories_heading">
        <h3>Our Instagram Stories</h3>
      </div>
      <div className="row">
        {data.map((d) => (
          <div key={d.img} className="col-3">
            <div className="insta_img">
              <img src={d.img} alt="Instagram Posts" />
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        {contact_data.map((d) => (
          <div key={d.text} className="col-3 website_offers">
            <div className="icon">{d.icon}</div>
            <div className="text">{d.text}</div>
            <div className="description">{d.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
