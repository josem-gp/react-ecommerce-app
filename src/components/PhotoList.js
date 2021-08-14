import React, { useState, useEffect } from "react";

const PhotoList = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("Error: data not found");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const photoMap = data.map((el) => {
    return <img src={el.url} alt={el.id} />;
  });

  return <div>{photoMap}</div>;
};

export default PhotoList;
