import React from "react";
import Cart from "../../images/cart.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Pic Some</h1>
      <Link to="/cart">
        <img className="cart" src={Cart} alt="cart" />
      </Link>
    </header>
  );
};

export default Header;
