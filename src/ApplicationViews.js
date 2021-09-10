import React from "react";
import { Route } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Home } from "./components/home/Home";
import { Shop } from "./components/shop/Shop";


export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Shop">
        <Shop />
      </Route>
      <Route exact path="/Login">
        <Login />
      </Route>
      <Route exact path="/Register">
        <Register />
      </Route>
    </>
  );
};