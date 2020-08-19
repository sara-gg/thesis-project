import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import NewProduct from "./views/NewProduct";
import UserGallery from "./views/UserGallery";
import AppBar from "./components/AppBar";
import Home from "./views/Home";
import history from "./utils/history";
import "./App.css";

function App() {
  return (
    <Router history={history}>
      {/* <AppBar /> */}

      <Switch>
        <Route path="/login" render={() => <Login />} />
        <Route path="/register" render={(props) => <Register />} />
        {/* <Route path="/logout" render={(props) => <Logout />} /> */}
        <Route path="/newproduct" render={(props) => <NewProduct />} />
        <Route path="/usergallery" render={(props) => <UserGallery />} />
        <Route path="/" render={() => <Home />} />
      </Switch>
    </Router>
  );
}

export default App;
