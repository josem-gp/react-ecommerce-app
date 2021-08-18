import React, { createContext } from "react";
import useData from "../useData";

const DataContext = createContext();

const DataContextProvider = (props) => {
  const [{ data, choosenImg, isBought, beingBought }, dispatch] = useData();
  // const [data, setData] = useState([]);
  // const [choosenImg, setChoosenImg] = useState([]);
  // const [isBought, setIsBought] = useState(false);
  // const [beingBought, setBeingBought] = useState(false);

  const chooseFav = (id) => {
    const favImg = data.find((el) => el.id === id);
    favImg.isFavorite = !favImg.isFavorite;
    const newData = [...data];
    // setData(newData);
    dispatch({ type: "SET_DATA", value: newData });
  };

  //Another BETTER way of doing it would be:
  // function chooseFav(id) {
  //   const updatedArr = data.map((photo) => {
  //     if (photo.id === id) {
  //       return { ...photo, isFavorite: !photo.isFavorite };
  //     }
  //     return photo;
  //   });

  //   setData(updatedArr);
  // dispatch({ type: "SET_DATA", value: updatedArr });
  // }

  const chooseAdd = (id) => {
    const cartImg = data.find((el) => el.id === id);
    // setChoosenImg([...choosenImg, cartImg]);
    dispatch({ type: "CHOOSEN_IMG", value: cartImg });
  };

  return (
    <DataContext.Provider
      value={{
        data,
        chooseFav,
        chooseAdd,
        choosenImg,
        isBought,
        beingBought,
        dispatch,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContextProvider, DataContext };
