import React from "react";
import "./imageBanner.css";
import image_carousel1 from "../../images/image_carousel1.jpg";
import image_carousel2 from "../../images/image_carousel2.jpg";
import image_carousel3 from "../../images/image_carousel3.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ImageBanner() {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active image_carousel">
            <div className="slider_text">
              <h5>Classic Exclusive</h5>
              <h3>{"Women's Collection"}</h3>
              <p>Upto 40% OFF</p>
              <div className="shop_btn">
                <button>
                  Shop Now <ArrowForwardIcon />
                </button>
              </div>
            </div>
            <img
              src={image_carousel1}
              className="d-block w-100"
              alt="Image_carousel"
            />
          </div>
          <div className="carousel-item image_carousel">
            <div className="slider_text">
              <h3>Top Brands</h3>
              <h5>{"Men's Collection"}</h5>
              <p>Upto 20% OFF</p>
              <div className="shop_btn">
                <button>
                  Shop Now <ArrowForwardIcon />
                </button>
              </div>
            </div>
            <img
              src={image_carousel2}
              className="d-block w-100"
              alt="Image_carousel"
            />
          </div>
          <div className="carousel-item image_carousel">
            <div className="slider_text">
              <h3>Summer Collection</h3>
              <h5>{"New Arrivals"}</h5>
              <p>OFF ON TOP BRANDS</p>
              <div className="shop_btn">
                <button>
                  Shop Now <ArrowForwardIcon />
                </button>
              </div>
            </div>
            <img
              src={image_carousel3}
              className="d-block w-100"
              alt="Image_carousel"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
