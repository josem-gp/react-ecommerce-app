import React from "react";
import Cart from "../images/cart.png";
import { Link, useRouteMatch, useLocation } from "react-router-dom";

const Header = () => {
  const { path, url } = useRouteMatch();
  const location = useLocation();

  const clickeableCartIcon = location.pathname === "/" && (
    <Link to={`${url}cart`}>
      <img className="cart" src={Cart} alt="cart" />
    </Link>
  );

  return (
    <header>
      <h1>Pic Some</h1>
      {clickeableCartIcon}
    </header>
  );
};

export default Header;
