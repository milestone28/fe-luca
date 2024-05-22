import React, { useEffect, useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import "./Nav.css";
import logo from "../Assets/bread.png";
import { Link, useLocation, useParams } from "react-router-dom";

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
    setMenu(pathname);
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
              setOpen(false);
            }}
          >
            <Link to="/">Home</Link>
            {pathname === "/" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setOpen(false);
            }}
          >
            <Link to="/menu">Menu</Link>
            {pathname === "/menu" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setOpen(false);
            }}
          >
            <Link to="/aboutus">About Us</Link>
            {pathname === "/aboutus" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setOpen(false);
            }}
          >
            <Link to="/contactus">Contact Us</Link>
            {pathname === "/contactus" ? <hr /> : <></>}
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
