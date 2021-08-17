import React, { useContext } from "react";
import Heart from "../../images/heart.png";
import RedHeart from "../../images/red_heart.png";
import Add from "../../images/add.png";
import { DataContext } from "../contextProvider/DataContextProvider";

const Photo = ({ image }) => {
  const { chooseFav, chooseAdd } = useContext(DataContext);

  const handleFav = (id) => {
    chooseFav(id);
  };

  const handleAdd = (id) => {
    chooseAdd(id);
  };

  return (
    <div className="image-container" key={image.id}>
      <img
        className="favorite"
        src={image.isFavorite ? RedHeart : Heart}
        alt="heart"
        onClick={() => handleFav(image.id)}
      />
      <img
        className="image-grid wide tall big"
        src={image.url}
        alt={image.id}
      />
      <img
        className="cart"
        src={Add}
        alt="add"
        onClick={() => handleAdd(image.id)}
      />
    </div>
  );
};

export default Photo;
