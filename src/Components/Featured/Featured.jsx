import React from "react";
import "./Featured.css";
import feature_image from "../Assets/featureBread.png";
const Featured = () => {
  return (
    <div className="featured">
      <div className="left">
        <div>
          <p>Handmade Bakery, </p>
          <p>Brunch &</p>
          <p>Coffee</p>
        </div>
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
