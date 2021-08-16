import React, { useState, createContext } from "react";

const DataContext = createContext();

const DataContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [choosenImg, setChoosenImg] = useState([]);

  const chooseFav = (id) => {
    const favImg = data.find((el) => el.id === id);
    favImg.isFavorite = !favImg.isFavorite;
    const newData = [...data];
    setData(newData);
  };

  const chooseAdd = (id) => {
    const cartImg = data.find((el) => el.id === id);
    setChoosenImg([...choosenImg, cartImg]);
  };

  return (
    <DataContext.Provider
      value={{ data, setData, chooseFav, chooseAdd, choosenImg, setChoosenImg }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContextProvider, DataContext };
