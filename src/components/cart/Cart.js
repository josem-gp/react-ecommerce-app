import React from "react";
import Delete from "../../images/delete.png";

const Cart = ({ choosenImg, setChoosenImg, setIsBought }) => {
  const UNIT_PRICE = 5.99;

  const handleDelete = (id) => {
    setChoosenImg([...choosenImg].filter((el) => el.id !== id));
  };

  const 

  const cartImg = choosenImg.map((el) => {
    return (
      <div className="cart-item">
        <img className="image-grid image-container" src={el.url} alt={el.id} />
        <img
          className="ri-delete-bin-line"
          src={Delete}
          alt="delete-icon"
          onClick={() => handleDelete(el.id)}
        />
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
        <button className="order-button" onClick={}>Place Order</button>
      </div>
    </main>
  );
};

export default Cart;
