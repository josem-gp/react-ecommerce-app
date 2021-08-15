import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "./cart/Cart";
import Header from "./Header";

import Home from "./home/Home";

function App() {
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
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home
            data={data}
            setData={setData}
            chooseAdd={chooseAdd}
            chooseFav={chooseFav}
          />
        </Route>
        <Route path="/cart">
          <Cart choosenImg={choosenImg} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
