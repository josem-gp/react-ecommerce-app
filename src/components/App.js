import React from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "./cart/Cart";
import Header from "./Header";

import Home from "./home/Home";

function App() {
  return (
    <div>
      <Header />
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
