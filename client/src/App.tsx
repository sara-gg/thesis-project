import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import NewProduct from "./views/NewProduct";
import UserGallery from "./views/UserGallery";
import Home from "./views/Home";
import history from "./utils/history";
import "./App.css";

function App() {
  return (
    <Router history={history}>
      {/* // <Router> */}
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/newproduct" component={NewProduct} />
        <Route path="/usergallery" component={UserGallery} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
