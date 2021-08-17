import React, { useState, useEffect, useContext } from "react";
import Photo from "./Photo";
import { DataContext } from "../contextProvider/DataContextProvider";

const PhotoList = () => {
  const [error, setError] = useState("");
  const { data, dispatch } = useContext(DataContext);
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
        // setData(data);
        dispatch({ type: "SET_DATA", value: data });
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const photoMap = data.map((el) => {
    return <Photo key={el.id} image={el} />;
  });

  return <main className="photos">{photoMap}</main>;
};

export default PhotoList;
