import React from "react";
import { Box, Button, Heading, Image } from "grommet";
import { Cart } from "grommet-icons";
import logo from "../assets/logo.png";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logout from "../components/Logout";
import "../styles/AppBar.scss";

const AppBar = () => {
  let history = useHistory();

  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="offwhite"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      className="appbar"
    >
      <Button
        icon={<Image src={logo} />}
        onClick={() => {
          history.push("/");
        }}
      />
      <Box
        direction="row"
        align="center"
        justify="between"
        className="right-appbar"
      >
        <NavLink exact to="/usergallery">
          <Heading level="4" color="text" className="navbar-header">
            User Gallery
          </Heading>
        </NavLink>

        <Button
          icon={<Cart />}
          onClick={() => {
            history.push("/login");
          }}
        />

        <Button
          type="reset"
          label="Register"
          onClick={() => {
            history.push("/register");
          }}
          primary
        />

        <Logout />

        <Button
          icon={<Cart />}
          onClick={() => {
            history.push("/login");
          }}
        />
      </Box>
    </Box>
  );
};

export default AppBar;
