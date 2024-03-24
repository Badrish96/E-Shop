import React, { useState, useEffect } from "react";
import "./bestSeller.css";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct, fetchProducts } from "../../Slices/productSlice";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { addItemToCart } from "../../Slices/cartSlice";

export default function BestSeller() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const onHoverAddToCart = (productId) => {
    setHoveredItem(productId);
  };

  const onMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleAddToCart = (productId) => {
    dispatch(addItemToCart(productId, 1)); // Assuming quantity is always 1
  };

  return (
    <div className="container">
      <div className="bestseller_heading">
        <h2>Our BestSeller</h2>
      </div>
      <div className="row">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div key={product.productId} className="col-4 bestseller_content">
              <div
                onMouseEnter={() => onHoverAddToCart(product.productId)}
                onMouseLeave={onMouseLeave}
              >
                <img src={product.imageUrl} alt="bestseller_img" />
                {hoveredItem === product.productId && (
                  <div className="add_to_cart">
                    <div className="image_icons">
                      <div className="icons">
                        <FavoriteBorderIcon
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
                        <VisibilityIcon
                          sx={{
                            fontSize: "1.3rem",
                            marginLeft: "4px",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                    <button
                      className="add_to_cart_btn"
                      onClick={() => handleAddToCart(product._id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                )}
              </div>
              <div className="bestseller_text title">
                <span>{product.manufacturer}</span>
              </div>
              <div className="bestseller_text description">
                <span>{product.description}</span>
              </div>
              <div className="bestseller_text price">
                <span>₹ {product.price}</span>
              </div>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
