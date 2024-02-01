import React from "react";
import "./shopByCategory.css";
import category_img1 from "../../images/category_img1.jpg";
import category_img2 from "../../images/category_img2.jpg";
import category_img3 from "../../images/category_img3.jpg";

export default function ShopByCategory() {
  return (
    <div className="container">
      <div className="category_heading">
        <h4>Shop By Categories</h4>
      </div>
      <div className="category_slider">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={category_img1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={category_img2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={category_img3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
