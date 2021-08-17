import React, { useContext } from "react";
import Heart from "../../images/heart.png";
import RedHeart from "../../images/red_heart.png";
import Add from "../../images/add.png";
import { DataContext } from "../contextProvider/DataContextProvider";

const Photo = () => {
  const { data, chooseFav, chooseAdd } = useContext(DataContext);

  const handleFav = (id) => {
    chooseFav(id);
  };

  const handleAdd = (id) => {
    chooseAdd(id);
  };
  const photoMap = data.map((el) => {
    return (
      <div className="image-container" key={el.id}>
        <img
          className="favorite"
          src={el.isFavorite ? RedHeart : Heart}
          alt="heart"
          onClick={() => handleFav(el.id)}
        />
        <img className="image-grid wide tall big" src={el.url} alt={el.id} />
        <img
          className="cart"
          src={Add}
          alt="add"
          onClick={() => handleAdd(el.id)}
        />
      </div>
    );
  });
  return <div>{photoMap}</div>;
};

export default Photo;
