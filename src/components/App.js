import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "./cart/Cart";
import Header from "./Header";

import Home from "./home/Home";

function App() {
  const [isBought, setIsBought] = useState(false);
  const [beingBought, setBeingBought] = useState(false);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart
            setIsBought={setIsBought}
            setBeingBought={setBeingBought}
            isBought={isBought}
            beingBought={beingBought}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
