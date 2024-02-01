import React, { useState } from "react";
import "./menubar.css";
import logo from "../../images/e-shop-high-resolution-logo-black.png";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
const menuItems = [
  {
    label: "Men",
    subItems: [
      "T-Shirts",
      "Formal Shirts",
      "Jackets",
      "Blazers & Coats",
      "Indian & Festive Wear",
      "Kurtas & Kurta Sets",
      "Sherwanis",
    ],
  },
  {
    label: "Women",
    subItems: [
      "Kurtas & Suits",
      "Sarees",
      "Ethnic Wear",
      "Lehenga Choli",
      "Jackets",
      "Western Wear",
      "Dresses",
      "Jumpsuits",
    ],
  },
  {
    label: "Footwear",
    subItems: [
      "Flats",
      "Casual Shoes",
      "Heels",
      "Boots",
      "Sports Shoes & Floaters",
      "Product Features",
      "360 Product Viewers",
      "Product with Video",
    ],
  },
  {
    label: "Kids",
    subItems: [
      "T-Shirts",
      "Jeans",
      "Trousers",
      "Party Wear",
      "Innerwear & Thermal",
      "Track Pants",
      "Value Pack",
    ],
  },
];

export default function MenuBar() {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const handleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" className="navbar_logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav_bar_items">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu">
                  {menuItems.map((menuItem, index) => (
                    <li key={index}>
                      <a className="dropdown-item" href="#">
                        {menuItem.label}
                      </a>
                      {menuItem.subItems.length > 0 && (
                        <ul className="submenu">
                          {menuItem.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <a className="dropdown-item" href="#">
                                {subItem}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Our Story
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {isSearchVisible && (
                <input type="text" className="search_input" />
              )}
              <div onClick={handleSearch} className="nav_bar_icons">
                <SearchIcon />
                <FavoriteBorderIcon sx={{ marginLeft: "10px" }} />
                <LocalMallOutlinedIcon sx={{ marginLeft: "10px" }} />
              </div>
              <button
                className="btn btn-outline-success login_btn"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
