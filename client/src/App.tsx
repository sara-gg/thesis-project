import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import NewProduct from "./views/NewProduct";
import UserGallery from "./views/UserGallery";
import AppBar from "./components/AppBar";
import Foot from "./views/Footer"
import ProductDetails from "./views/ProductDetails";
import Home from "./views/Home";
import "./App.css";
import CategoryPage from "./components/CategoryPage";

function App() {
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/newproduct">
          <NewProduct />
        </Route>
        <Route path="/usergallery">
          <UserGallery isAuthenticated />
        </Route>
        <Route path={`/category/products`} component={CategoryPage} />
        <Route path="/productdetails">
          <ProductDetails />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Foot />
    </Router>
  );
}

export default App;
