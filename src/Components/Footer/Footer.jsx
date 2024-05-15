import React from "react";
import "./Footer.css";
import logo from "../Assets/bread.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="div-block-2">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={logo} alt="" />
              <p>Luka's Loaves</p>
            </div>
          </div>

          <div className="footer-right">
            <div className="div-block-3">
              <ul className="footer-links">
                <li>Home</li>
                <li>About Us</li>
                <li>Terms & Conditions</li>
                <li>Menu</li>
                <li>Contact Us</li>
              </ul>

              <div className="text-block-2">
                1/16 Wentworth Ave, Surry Hills NSW 2010
                <br />
                (02) 8057 9358
              </div>
            </div>

            <div className="div-block-5">
              <div className="block-5-left">
                <p>Design & Built By ❤️ Gary Yu</p>
              </div>
              <div className="text-block-3">
                <p>Luka's Loave 2024 ©. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
