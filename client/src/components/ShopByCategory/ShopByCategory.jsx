import React, { useEffect } from "react";
import "./shopByCategory.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategory,
  fetchProductCategory,
} from "../../Slices/productCategorySlice";

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
  const dispatch = useDispatch();
  const categories = useSelector(selectCategory);

  useEffect(() => {
    dispatch(fetchProductCategory());
  }, [dispatch]);

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
            {categories.map((category, index) => (
              <div key={index} className="col-4 category_slider">
                <div>
                  <img src={category.imageUrl} alt="category" />
                </div>
                <div>
                  <button className="category_btn">{category.category}</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
