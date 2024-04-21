import React, { useEffect, useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import "./Nav.css";

import logo from "../Assets/bread.png";

const Nav = () => {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const ref = useOnclickOutside(() => closeMenu());

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Luka's Loaves</p>
      </div>
      <ul className={`nav-menu ${open ? "open" : ""}`} ref={ref}>
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          Home{menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("menu");
          }}
        >
          Menu{menu === "menu" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("about");
          }}
        >
          About Us{menu === "about" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("contact");
          }}
        >
          Contact Us{menu === "contact" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        <div className="nav-cart-count">1+</div>
        <ion-icon id="cart-icon" name="cart-outline"></ion-icon>
        <ion-icon ref={ref}
          onClick={() => {
            setOpen(!open);
          }}
          id="menu-icon"
          name={`${open ? "close-outline" : "menu"}`}
        ></ion-icon>
      </div>
    </div>
  );
};

export default Nav;
