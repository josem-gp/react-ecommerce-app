import React from "react";
import Cart from "../../images/cart.png";

const Header = () => {
  return (
    <header>
      <h1>Pic Some</h1>
      <img className="cart" src={Cart} alt="cart" />
    </header>
  );
};

export default Header;
