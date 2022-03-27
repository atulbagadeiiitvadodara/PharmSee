import React, { useState } from "react";
import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Switch, Route } from "react-router-dom";
import { Context } from "./component/Context";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import About from "./component/About";
import Contact from "./component/Contact";
import Checkout from "./component/Checkout";
import Error from "./component/Error";

function App() {
  const [context, setContext] = useState("");

  return (
    <>
      <Context.Provider value={[context, setContext]}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/error" component={Error} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </Context.Provider>
    </>
  );
}

export default App;
