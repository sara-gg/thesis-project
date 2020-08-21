import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./views/Login";
import Register from "./views/Register";
import NewProduct from "./views/NewProduct";
import UserGallery from "./views/UserGallery";
import AppBar from "./components/AppBar";
import Foot from "./views/Footer";
import ProductDetails from "./views/ProductDetails";
import Home from "./views/Home";
import "./App.css";
import CategoryPage from "./components/CategoryPage";

type Props = {
  setIsAuthenticated: (b: boolean) => void;
};

function App({ setIsAuthenticated }: Props): JSX.Element {
  const userToken = localStorage.getItem("accessToken");
  if (userToken) {
    setIsAuthenticated(true);
  }

  return (
    <Router>
      <AppBar isAuthenticated />
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
          <UserGallery />
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    setIsAuthenticated: (boolean: boolean) =>
      dispatch({
        type: "AUTHENTICATED",
        payload: boolean,
      }),
  };
};

export default connect(null, mapDispatchToProps)(App);
