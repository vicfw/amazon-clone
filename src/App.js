import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import SubTotal from "./Components/SubTotal";
import "./App.css";

function App() {
  return (
    <Router>
      <React.StrictMode>
        <Switch>
          <Route path="/checkout">
            <Header />
            <div className="checkoutWrapper">
              <Checkout />
              <SubTotal />
            </div>
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </React.StrictMode>
    </Router>
  );
}

export default App;
