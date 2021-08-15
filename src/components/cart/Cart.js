import React from "react";

const Cart = ({ choosenImg }) => {
  const cartImg = choosenImg.map((el) => {
    return (
      <div className="cart-item">
        <img className="image-grid" src={el.url} alt={el.id} />
      </div>
    );
  });

  return (
    <main class="cart-page">
      <h1>Check out</h1>
      {cartImg}
    </main>
  );
};

export default Cart;
