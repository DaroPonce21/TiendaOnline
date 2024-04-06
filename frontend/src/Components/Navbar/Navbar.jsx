import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/dropdown_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Shopping</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("Shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {menu === "Shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Mens
          </Link>
          {menu === "Mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Womens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Womens
          </Link>
          {menu === "Womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Kinds");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "Kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Acceder</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="carrito" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
