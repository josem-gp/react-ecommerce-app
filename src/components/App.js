import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import PhotoList from "./PhotoList";

function App() {
  return (
    <div>
      <Switch></Switch>
      <Header />
      <PhotoList />
    </div>
  );
}

export default App;
