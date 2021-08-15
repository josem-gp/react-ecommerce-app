import React from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "./cart/Cart";

import Home from "./home/Home";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
