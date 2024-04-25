import React from "react";
import "./Featured.css";
import feature_image from "../Assets/featureBread.png";
const Featured = () => {
  return (
    <div className="featured">
      <div className="left">
          <h1>Handmade Bakery, 
          <br/>Loaves...
          </h1>
          <p>We make real bread from the best organic ingredients <br />- by hand, with dedication and with the best of care.</p>
        <div className="menu-button">
          <div>See Our Menu</div>
        </div>
      </div>

      <div className="right">
        <img src={feature_image} alt="" />
      </div>
    </div>
  );
};

export default Featured;
