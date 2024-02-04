import React, { useState } from "react";
import "./bestSeller.css";
import black_t_shirt from "../../images/black t-shirt.jpg";
import purse from "../../images/purse.jpg";
import yellow_t_shirt from "../../images/yellow t-shirt.jpg";
import shoes from "../../images/men shoes.jpg";
import gown from "../../images/gown.jpg";
import women_frok from "../../images/women frok.jpg";
import hawain_shirt from "../../images/hawain shirt.jpg";
import heels from "../../images/women-heels.jpg";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
const data = [
  {
    img: black_t_shirt,
    item_title: "Roadster",
    item_description: "Printed Cotton T-Shirt",
    price: "₹ 500",
  },
  {
    img: purse,
    item_title: "Allen Solly",
    item_description: "Women Handheld bag",
    price: "₹ 2,500",
  },
  {
    img: yellow_t_shirt,
    item_title: "Louis Philip Sport",
    item_description: "Round Neck T-Shirt",
    price: "₹ 2,500",
  },
  {
    img: shoes,
    item_title: "Adidas",
    item_description: "Men Running Shoes",
    price: "₹ 3,500",
  },
  {
    img: gown,
    item_title: "Trendyol",
    item_description: "Women White Gown",
    price: "₹ 10,500",
  },
  {
    img: women_frok,
    item_title: "YK Disney",
    item_description: "Girls Green Dress",
    price: "₹ 950",
  },
  {
    img: hawain_shirt,
    item_title: "US Polo",
    item_description: "Tailored Cotton Casual Shirt",
    price: "₹ 1,850",
  },
  {
    img: heels,
    item_title: "Zara",
    item_description: "Women Sandals",
    price: "₹ 5,500",
  },
];

export default function BestSeller() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const onHoverAddToCart = (index) => {
    setHoveredItem(index);
  };

  const onMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="container">
      <div className="bestseller_heading">
        <h2>Our BestSeller</h2>
      </div>
      <div className="row">
        {data.map((d, index) => (
          <div key={d.item_description} className="col-4 bestseller_content">
            <div
              onMouseEnter={() => onHoverAddToCart(index)}
              onMouseLeave={onMouseLeave}
            >
              <img src={d.img} alt="bestseller_img" />
              {hoveredItem === index && (
                <div className="add_to_cart">
                  <div className="image_icons">
                    <div className="icons">
                      <StarBorderIcon
                        sx={{
                          fontSize: "1.3rem",
                          marginLeft: "4px",
                          marginTop: "5px",
                        }}
                      />
                    </div>
                    <div className="icons">
                      <SwapHorizIcon
                        sx={{
                          fontSize: "1.3rem",
                          marginLeft: "4px",
                          marginTop: "5px",
                        }}
                      />
                    </div>
                    <div className="icons">
                      <VisibilityOutlinedIcon
                        sx={{
                          fontSize: "1.3rem",
                          marginLeft: "4px",
                          marginTop: "5px",
                        }}
                      />
                    </div>
                  </div>
                  <button className="add_to_cart_btn">Add to Cart</button>
                </div>
              )}
            </div>
            <div className="bestseller_text title">
              <span>{d.item_title}</span>
            </div>
            <div className="bestseller_text description">
              <span>{d.item_description}</span>
            </div>
            <div className="bestseller_text price">
              <span>{d.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
