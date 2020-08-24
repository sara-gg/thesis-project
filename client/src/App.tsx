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
import Basket from "./views/Basket";

// Stripe
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51HIYqeHvILi8NO5PWxHkN04ZQxZcdDIxVUPh5nVfaQRMXC4UJiptUx4uWyCJHWfGfih2AhoSB4wgI2xKskMCECs800otDuHmjG");



type Props = {
  // id: Number;
  // name: String;
  // lastname: String;
  // isAuthenticated: boolean;
  setUserData: (i: Number, n: String, l: String, b: boolean) => void;
};

function App({ setUserData }: Props): JSX.Element {
  const userToken = localStorage.getItem("accessToken");
  const userId: any = localStorage.getItem("userId");
  const userName: any = localStorage.getItem("userName");
  // const userData = JSON.parse(jsonUserData);
  console.log("App user token", userToken);
  console.log("App user id", userId);
  console.log("App user name", userName);

  if (userToken) {
    setUserData(parseInt(userId), JSON.parse(userName), "", true);
  }

  return (
    <Router>
      <Elements stripe={stripePromise}>
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
          <Route path="/basket_products">
            <Basket isAuthenticated />
          </Route>
          <Route path={`/products`} component={CategoryPage} />
          <Route path="/productdetails">
            <ProductDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Foot />
      </Elements>
    </Router>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUserData: (
      id: Number,
      name: String,
      lastname: String,
      boolean: boolean
    ) =>
      dispatch({
        type: "SET_USER_DATA",
        payload: { id, name, lastname, boolean },
      }),
  };
};

export default connect(null, mapDispatchToProps)(App);
