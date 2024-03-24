import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartData, fetchCartData } from "../../Slices/cartDataSlice";
import "./checkout.css";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";

export default function Checkout() {
  const cartData = useSelector(selectCartData);
  const dispatch = useDispatch();
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    // Calculate subtotal when cartData changes
    let total = 0;
    cartData.forEach((item) => {
      total += item.price;
    });
    setSubtotal(total);
  }, [cartData]);

  const handleQtyBtn = (count) => {
    return count + 1;
  };
  return (
    <div>
      <MenuBar />
      <div className="container">
        <div className="checkout_heading">
          <h4>Checkout</h4>
        </div>
        <div className="row order_cart">
          <div className="col-8">
            <table className="sub_heading">
              <thead>
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>SubTotal</th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((cartItem) => (
                  <tr key={cartItem._id} className="selected_product">
                    <td className="product_info">
                      <div className="product_img">
                        <img src={cartItem.imageUrl} alt="Selected Product" />
                        <span>{cartItem.description}</span>
                        <span
                          className="product_size"
                          style={{ fontWeight: "500" }}
                        >
                          Size: Regular
                        </span>
                      </div>
                    </td>
                    <td>₹{cartItem.price}</td>
                    <td>
                      <button className="qty_btn" onClick={handleQtyBtn}>
                        - 1 +
                      </button>
                    </td>
                    <td>₹{cartItem.price}</td>
                    <td>
                      <DeleteSweepOutlinedIcon sx={{ color: "red" }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-4">
            <div className="order_amt">
              <h6>Subtotal</h6>
              <span>₹{subtotal}</span>
            </div>
            <div className="apply_coupon">
              <label>Enter Discount Code</label>
              <div className="apply_coupon_btn">
                <input type="text" />
                <button>Apply</button>
              </div>
            </div>
            <div className="delivery">
              <span>Delivery Charge</span>
              <span>Free</span>
            </div>
            <div className="order_total">
              <span>Grand Total</span>
              <span>₹{subtotal}</span>
            </div>
            <button className="checkout_btn">Proceed to Checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
