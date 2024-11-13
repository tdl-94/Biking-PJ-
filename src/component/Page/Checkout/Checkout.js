import React, { useState } from "react";
import "./Checkout.css";
import { UseCart } from "../../../context/CartContext";
const Checkout = () => {
  const { cart } = UseCart();

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="left-checkout">
            <form action=""></form>
            <button>PAY NOW</button>
          </div>
        </div>
        <div className="col-6">
          <div className="right-checkout">
            {cart.map((item, index) => (
              <div className="product-checkout">
                <div className="item_img">
                  <img src={item.image} alt="" />
                </div>
                <p>{item.title} </p>
                <p>{item.price} USD</p>
              </div>
            ))}
          </div>
          <div className="s_total">
            <div className="info">
              <div>SubTotal</div>
              <div className="total">
                <div className="cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>
                    {cart
                      .reduce((prev, current) => {
                        return prev + current.quantity * current.price;
                      }, 0)
                      .toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
