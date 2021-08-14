import React, { useState, useEffect } from "react";
import Photo from "./Photo";

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

  const chooseFav = (id) => {
    const choosenImg = data.find((el) => el.id === id);
    console.log(choosenImg);
  };

  return (
    <main className="photos">
      <Photo data={data} chooseFav={chooseFav} />
    </main>
  );
};

export default PhotoList;
