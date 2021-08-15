import React from "react";
import Cart from "../../images/cart.png";
import { Link, useRouteMatch } from "react-router-dom";

const Header = () => {
  const { path, url } = useRouteMatch();

  return (
    <header>
      <h1>Pic Some</h1>
      <Link to={`${url}cart`}>
        <img className="cart" src={Cart} alt="cart" />
      </Link>
    </header>
  );
};

export default Header;
