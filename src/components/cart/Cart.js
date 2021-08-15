import React from "react";

const Cart = ({ choosenImg }) => {
  const UNIT_PRICE = 5.99;
  const cartImg = choosenImg.map((el) => {
    console.log(el);
    return (
      <div className="cart-item">
        <img className="image-grid" src={el.url} alt={el.id} />
        <h3>{`$${UNIT_PRICE}`}</h3>
      </div>
    );
  });

  return (
    <main class="cart-page">
      <h1>Check out</h1>
      {cartImg}
      <h1 className="total-cost">Total: ${UNIT_PRICE * cartImg.length}</h1>
      <div>
        <button className="order-button">Place Order</button>
      </div>
    </main>
  );
};

export default Cart;
