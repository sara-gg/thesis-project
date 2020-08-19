import React from "react";
import { Box, Button, Heading, Image } from "grommet";
import { Cart } from "grommet-icons";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const AppBar = (props: any) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="#af8e7a"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1", height: "90px" }}
    {...props}
  >
    <NavLink exact to={"/"}>
      <Image src={logo} />
    </NavLink>

    <Heading level="3" margin="none"></Heading>
    <Button icon={<Cart />} onClick={() => {}} />
  </Box>
);

export default AppBar;
