import React from "react";
import "./checkout.css";
import MenuBar from "../../components/MenuBar/MenuBar";
export default function Checkout() {
  return (
    <div>
      <MenuBar />
      <div className="container">
        <div className="checkout_heading">
          <h4>Checkout</h4>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="sub_heading">
              <p>Products</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>SubTotal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
