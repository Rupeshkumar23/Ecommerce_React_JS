import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox_navigator">
        <div className="descriptionbox_nav_box">Description</div>
        <div className="descriptionbox_nav_box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox_description">
        An e-commerce website is an online platform that facilitates the buying
        and selling of products or services over the internet. It serves as a
        virtual marketplace where businesses and consumers can connect, browse,
        and transact without the need for physical, in-person interactions.
        These websites provide a wide range of features and functionalities,
        including product listings, secure payment processing, user reviews, and
        customer support, making it convenient for both sellers and buyers to
        engage in online commerce. 
        <p>
        E-commerce websites have become increasingly
        popular due to their accessibility and convenience, allowing people to
        shop from the comfort of their homes and access a global marketplace
        with a diverse range of products and services.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
