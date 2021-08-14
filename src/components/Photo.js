import React from "react";

const Photo = ({ data }) => {
  const photoMap = data.map((el) => {
    return <img src={el.url} alt={el.id} />;
  });
  return <div>{photoMap}</div>;
};

export default Photo;
