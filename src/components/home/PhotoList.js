import React, { useState, useEffect } from "react";
import Photo from "./Photo";

const PhotoList = ({ data, setData, chooseAdd, chooseFav }) => {
  const [error, setError] = useState("");

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

  return (
    <main className="photos">
      <Photo data={data} chooseFav={chooseFav} chooseAdd={chooseAdd} />
    </main>
  );
};

export default PhotoList;
