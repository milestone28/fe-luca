import React, { useEffect, useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import "./Nav.css";
import logo from "../Assets/bread.png";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const closeMenu = () => setOpen(false);
  const ref = useOnclickOutside(() => closeMenu());
  const [active, setActive] = useState(false);
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Luka's Loaves</p>
      </div>

      <div className="right-menu">

      <ul className={`nav-menu ${open ? "open" : ""}`} ref={ref}>
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link to="/">Home</Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("menu");
          }}
        >
          <Link to="/menu">Menu</Link>
          {menu === "menu" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("about");
          }}
        >
          <Link to="/aboutus">About Us</Link>
          {menu === "about" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("contact");
          }}
        >
          <Link to="/contactus">Contact Us</Link>
          {menu === "contact" ? <hr /> : <></>}
        </li>
    
      </ul>

      <div className="nav-login-cart">
          <div className="nav-cart-count">1+</div>
          <Link to="/cart">
            {" "}
            <ion-icon id="cart-icon" name="cart-outline"></ion-icon>
          </Link>
          <ion-icon
            ref={ref}
            onClick={() => {
              setOpen(!open);
            }}
            id="menu-icon"
            name={`${open ? "close-outline" : "menu"}`}
          ></ion-icon>
        </div>

      </div>


  
    </div>
  );
};

export default Nav;
