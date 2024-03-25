import React from "react";
import MenuBar from "../../components/MenuBar/MenuBar";
import frok from "../../images/women frok.jpg";
import StarIcon from "@mui/icons-material/Star";
import "./product.css";
export default function Product() {
  const colors = ["red", "blue", "green", "yellow", "pink", "purple"]; // Define color options
  const sizes = ["S", "M", "L", "XL", "XXL"];
  return (
    <div>
      <MenuBar />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="product_desc_img">
              <img src={frok} alt="Kids Frok" />
            </div>
          </div>
          <div className="col-6">
            <div className="product_desc_info">
              <h4>YK Disney</h4>
              <span>Girls Frok - Green</span>
              <div className="product_review_stars">
                {[...Array(5)].map((_, index) => (
                  <StarIcon key={index} sx={{ color: "#e7d404" }} />
                ))}
                {" 5.0 reviews (1,000 Reviews)"}
              </div>
              <span>
                ₹1,200.00 <span className="discounted_price">₹1,500.00</span>
              </span>
              <div className="product_desc">
                {
                  "Elevate your little girl's wardrobe with this stunning green dress from YK Disney. The vibrant green color is perfect for any occasion, while the comfortable fabric ensures she stays stylish and comfortable all day long."
                }
              </div>
              <div className="product_color">
                <span>Color</span>
                <div className="color_options">
                  {colors.map((color, index) => (
                    <span
                      key={index}
                      className={`color_option_container ${
                        index === 0 ? "first_color_option" : ""
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                    >
                      &nbsp;
                    </span>
                  ))}
                </div>
              </div>
              <div className="product_desc_size">
                <span>Size</span>
                <div className="product_sizes">
                  {sizes.map((size, index) => (
                    <span
                      className={`size_options ${
                        index === 0 ? "first_size_option" : ""
                      } ${
                        index === sizes.length - 1
                          ? "last_size_option"
                          : index === sizes.length - 2
                          ? "second_last_size_option"
                          : ""
                      }`}
                      key={index}
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
