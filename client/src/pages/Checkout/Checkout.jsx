import React from "react";
import "./checkout.css";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import frok from "../../images/women frok.jpg";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import purse from "../../images/purse.jpg";
import casual_shirt from "../../images/garment-casual-material-wear-blue.jpg";
const data = [
  {
    product_img: frok,
    product_description: "Girls Pink Moana Printed Dress",
    product_price: "$80.00",
    product_total: "$80.00",
    size: "S",
  },
  {
    product_img: purse,
    product_description: "Women Textured Handheld Bag",
    product_price: "$80.00",
    product_total: "$80.00",
    size: "Regular",
  },
  {
    product_img: casual_shirt,
    product_description: "Tailored Cotton Casual Shirt",
    product_price: "$40.00",
    product_total: "$40.00",
    size: "M",
  },
];

export default function Checkout() {
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
                {data.map((d, index) => (
                  <tr key={d.product_description} className="selected_product">
                    <td className="product_info">
                      <div className="product_img">
                        <img src={d.product_img} alt="Selected Product" />
                        <span>{d.product_description}</span>
                        <span
                          className="product_size"
                          style={{ fontWeight: "500" }}
                        >
                          Size: {d.size}
                        </span>
                      </div>
                    </td>
                    <td>{d.product_price}</td>
                    <td>
                      <button className="qty_btn">- 1 +</button>
                    </td>
                    <td>{d.product_total}</td>
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
              <span>$200.00</span>
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
              <span>$5.00</span>
            </div>
            <div className="order_total">
              <span>Grand Total</span>
              <span>$205.00</span>
            </div>
            <button className="checkout_btn">Proceed to Checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
