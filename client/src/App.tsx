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
import CategoryPage from "./views/CategoryPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApiService from "./ApiService/ApiService";

const TEST = process.env.TEST;

type Props = {
  setUserData: (
    i: number,
    n: string,
    l: string,
    u: string,
    e: string,
    bd: string,
    g: string,
    a: string,
    b: boolean
  ) => void;
};

function App({ setUserData }: Props): JSX.Element {
  const userToken = localStorage.getItem("accessToken");
  const userId: any = localStorage.getItem("userId");

  const getAllUserData = (userId: number) => {
    ApiService.getUserData(userId).then((res) => {
      setUserData(
        res.id,
        res.name,
        res.lastname,
        res.username,
        res.email,
        res.birthdate,
        res.gender,
        res.address,
        true
      );
    });
  };

  if (userToken && userId) {
    getAllUserData(userId);
  }

  return (
    <Router>
      <AppBar isAuthenticated />
      <ToastContainer />
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
        <Route path={`/products`} component={CategoryPage} />
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

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     setUserData: (
//       id: Number,
//       name: String,
//       lastname: String,
//       boolean: boolean
//     ) =>
//       dispatch({
//         type: "SET_USER_DATA",
//         payload: { id, name, lastname, boolean },
//       }),
//   };
// };

// export default connect(null, mapDispatchToProps)(App);

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUserData: (
      id: number,
      name: string,
      lastname: string,
      username: string,
      email: string,
      birthdate: string,
      gender: string,
      address: string,
      boolean: boolean
    ) =>
      dispatch({
        type: "SET_USER_DATA",
        payload: {
          id,
          name,
          lastname,
          username,
          email,
          birthdate,
          gender,
          address,
          boolean,
        },
      }),
  };
};

export default connect(null, mapDispatchToProps)(App);
