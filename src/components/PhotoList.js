import React, { useState, useEffect } from "react";

const PhotoList = () => {
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
        console.log(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return <div></div>;
};

export default PhotoList;
