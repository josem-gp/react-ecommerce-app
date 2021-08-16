import React, { useContext } from "react";
import Delete from "../../images/delete.png";
import { DataContext } from "../contextProvider/dataContext";

const Cart = () => {
  const UNIT_PRICE = 5.99;
  const {
    choosenImg,
    setChoosenImg,
    setIsBought,
    setBeingBought,
    isBought,
    beingBought,
  } = useContext(DataContext);

  const handleDelete = (id) => {
    setChoosenImg([...choosenImg].filter((el) => el.id !== id));
  };

  const handleBuy = () => {
    setBeingBought(true);
    setTimeout(() => {
      setBeingBought(false);
      setChoosenImg([]);
      setIsBought(true);
    }, 3000);
  };

  const cartImg = choosenImg.map((el) => {
    return (
      <div className="cart-item" key={el.id}>
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

  const cartState = () => {
    if (isBought) {
      return (
        <div>
          <h1 className="total-cost">Total: ${UNIT_PRICE * cartImg.length}</h1>
          <h3>You have no items in your cart.</h3>
        </div>
      );
    } else {
      return (
        <div>
          {cartImg}
          <h1 className="total-cost">Total: ${UNIT_PRICE * cartImg.length}</h1>
          <div>
            <button className="order-button" onClick={handleBuy}>
              {beingBought ? "Ordering..." : "Place Order"}
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartState()}
    </main>
  );
};

export default Cart;
