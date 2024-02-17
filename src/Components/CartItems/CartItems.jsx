/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import icon from "../Assets/icons-i-32.png";
import CustomHelmet from "../Helmet/Helmet";
const CartItems = () => {
  const { all_product, cartItems, removeFromCart,getTotalCartItems, getTotalCartAmount } =
    useContext(ShopContext);
  const title = `TRENDY - Shopping Cart - (${getTotalCartItems()})`;
  return (
    <div className="cartitems">
      <CustomHelmet title={title} />
      <div className="cartitems_format_main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e, i) => {
        if (cartItems[e.id] > 0) {
          return (
            <div  key={i}>
              <div className="cartitems_format cartitems_format_main">
                <img src={e.image} alt="" className="carticon_product_icon" />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button
                  aria-label="CartItemQuantity"
                  className="cartitems_quantity"
                >
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems_remove_icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt="remove_icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems_down">
        <div className="cartitems_total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems_total_item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems_total_item">
                <svg width="25" height="25" viewBox="0 0 25 25">
                  <g>
                    <rect width="25" height="25" fill="none"></rect>
                    <path
                      d="M23.4824,12.8467,20.5615,9.6382A1.947,1.947,0,0,0,18.9863,9H17V6.495a2.5,2.5,0,0,0-2.5-2.5H3.5A2.5,2.5,0,0,0,1,6.495v9.75a2.5,2.5,0,0,0,2.5,2.5h.5479A2.7457,2.7457,0,0,0,6.75,21.02,2.6183,2.6183,0,0,0,9.4222,19H16.103a2.7445,2.7445,0,0,0,5.3467-.23h.7349A1.6564,1.6564,0,0,0,24,16.9805V14.1724A1.9371,1.9371,0,0,0,23.4824,12.8467ZM8.4263,18.745a1.7394,1.7394,0,0,1-3.3526,0,1.5773,1.5773,0,0,1,.0157-1,1.7382,1.7382,0,0,1,3.3213,0,1.5782,1.5782,0,0,1,.0156,1ZM9.447,18a2.7258,2.7258,0,0,0-5.394-.255H3.5a1.5016,1.5016,0,0,1-1.5-1.5V6.495a1.5017,1.5017,0,0,1,1.5-1.5h11a1.5016,1.5016,0,0,1,1.5,1.5V18Zm10.9715.77a1.7385,1.7385,0,0,1-3.3369,0,1.5727,1.5727,0,0,1,0-1,1.742,1.742,0,1,1,3.3369,1ZM23,16.9805c0,.5684-.2285.79-.8154.79H21.45A2.73,2.73,0,0,0,17,16.165V10h1.9863a.9758.9758,0,0,1,.8379.3135l2.9268,3.2148a.95.95,0,0,1,.249.6441ZM21.6762,13.62A.5117.5117,0,0,1,21.85,14H18.5435A.499.499,0,0,1,18,13.4718V11h1.0725a.7592.7592,0,0,1,.594.2676Z"
                      fill="#1d1d1f"
                    ></path>
                  </g>
                </svg> 
              <p>   
                Shipping Fee
              </p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems_total_item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems_promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems_promobox">
            <input
              type="text"
              style={{ cursor: `url(${icon}),auto` }}
              placeholder="promo code"
            />
            <button aria-label="Submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
