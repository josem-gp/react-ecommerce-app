import React from "react";
import Heart from "../../images/heart.png";
import RedHeart from "../../images/red_heart.png";
import Add from "../../images/add.png";

const Photo = ({ data, chooseFav }) => {
  const handleClick = (id) => {
    chooseFav(id);
  };

  const photoMap = data.map((el) => {
    return (
      <div className="image-container" key={el.id}>
        <img
          className="favorite"
          src={el.isFavorite ? RedHeart : Heart}
          alt="heart"
          onClick={() => handleClick(el.id)}
        />
        <img className="image-grid wide tall big" src={el.url} alt={el.id} />
        <img className="cart" src={Add} alt="add" />
      </div>
    );
  });
  return <div>{photoMap}</div>;
};

export default Photo;