import React from "react";

const Photo = ({ data }) => {
  const photoMap = data.map((el) => {
    return (
      <img
        className="image-grid image-container wide tall big"
        src={el.url}
        alt={el.id}
      />
    );
  });
  return <div>{photoMap}</div>;
};

export default Photo;
