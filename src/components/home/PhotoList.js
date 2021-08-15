import React, { useState, useEffect } from "react";
import Photo from "./Photo";

const PhotoList = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [choosenImg, setChoosenImg] = useState([]);

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

  const chooseFav = (id) => {
    const choosenImg = data.find((el) => el.id === id);
    choosenImg.isFavorite = !choosenImg.isFavorite;
    const newData = [...data];
    setData(newData);
  };

  const chooseAdd = (id) => {
    const choosenImg = data.find((el) => el.id === id);
    setChoosenImg([...choosenImg, choosenImg]);
  };

  return (
    <main className="photos">
      <Photo data={data} chooseFav={chooseFav} chooseAdd={chooseAdd} />
    </main>
  );
};

export default PhotoList;
