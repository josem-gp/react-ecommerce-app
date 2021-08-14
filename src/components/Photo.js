import React from "react";
import Heart from "../images/heart.png";
import RedHeart from "../images/red_heart.png";
import Add from "../images/add.png";

const Photo = ({ data }) => {
  const photoMap = data.map((el) => {
    return (
      <div className="image-container">
        <img className="favorite" src={Heart} alt="heart" />
        <img className="image-grid wide tall big" src={el.url} alt={el.id} />
        <img className="cart" src={Add} alt="add" />
      </div>
    );
  });
  return <div>{photoMap}</div>;
};

export default Photo;
