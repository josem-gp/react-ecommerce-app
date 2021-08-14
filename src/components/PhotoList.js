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

  return (
    <div>
      <Photo data={data} />
    </div>
  );
};

export default PhotoList;
