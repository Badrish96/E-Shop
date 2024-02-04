import React from "react";
import "./shopByCategory.css";
import category_img1 from "../../images/category_img1.jpg";
import category_img2 from "../../images/category_img2.jpg";
import category_img3 from "../../images/category_img3.jpg";
import category_img4 from "../../images/redshirt.png";
import category_img5 from "../../images/Urban shirts.png";
import category_img6 from "../../images/shortswomen.png";
import category_img7 from "../../images/Tracksuit.png";
import category_img8 from "../../images/signup_banner.png";
import category_img9 from "../../images/Women pink hoodie.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = [
  {
    img: category_img1,
    BtnText: "Casual Wear",
  },
  {
    img: category_img2,
    BtnText: "Winter Wear",
  },
  {
    img: category_img3,
    BtnText: "Women Collection",
  },
  {
    img: category_img4,
    BtnText: "Casual Shirts",
  },
  {
    img: category_img5,
    BtnText: "Winter Wear",
  },
  {
    img: category_img6,
    BtnText: "Summer Wear",
  },
  {
    img: category_img7,
    BtnText: "Top Brands",
  },
  {
    img: category_img8,
    BtnText: "On Discount",
  },
  {
    img: category_img9,
    BtnText: "Hoodies",
  },
];

function SampleNextArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "gray", // Use color property
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      {/* Use ArrowForwardIcon here */}
      <button className="slider_arrow">
        <ArrowForwardIcon />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "gray", // Use color property
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      {/* Use ArrowBackIcon here */}
      <button className="slider_arrow">
        <ArrowBackIcon />
      </button>
    </div>
  );
}

export default function ShopByCategory() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container">
      <div className="category_heading">
        <h4>Shop By Categories</h4>
      </div>
      <div className="row">
        <div className="slider-container">
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.BtnText} className="col-4 category_slider">
                <div>
                  <img src={d.img} alt="category" />
                </div>
                <div>
                  <button className="category_btn">{d.BtnText}</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
