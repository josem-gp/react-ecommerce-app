import React from "react";
import PhotoList from "./PhotoList";

const Home = ({ data, setData, chooseAdd, chooseFav }) => {
  return (
    <div>
      <PhotoList
        data={data}
        setData={setData}
        chooseAdd={chooseAdd}
        chooseFav={chooseFav}
      />
    </div>
  );
};

export default Home;
