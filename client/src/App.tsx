import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
// import Logout from "./components/Logout";
import NewProduct from "./views/NewProduct";
import Home from "./views/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" render={() => <Login />} />
        <Route path="/register" render={(props) => <Register />} />
        {/* <Route path="/logout" render={(props) => <Logout />} /> */}
        <Route path="/newproduct" render={(props) => <NewProduct />} />
        <Route path="/" render={() => <Home />} />
      </Switch>
    </Router>
  );
}

export default App;
