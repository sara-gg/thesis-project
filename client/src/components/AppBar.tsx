import React from "react";
import { Box, Button, Image } from "grommet";
import { Cart } from "grommet-icons";
import logo from "../assets/logo.png";
import { useHistory } from "react-router-dom";
import Logout from "../components/Logout";

const AppBar = () => {
  let history = useHistory();

  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="#AD855E"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      style={{ zIndex: 1, height: "90px" }}
    >
      <Button
        icon={<Image src={logo} />}
        onClick={() => {
          history.push("/home");
        }}
      />
      <Button
        onClick={() => {
          history.push("/usergallery");
        }}
      >
        Go to User Gallery
      </Button>
      <Button
        icon={<Cart />}
        onClick={() => {
          history.push("/login");
        }}
      />
      <Logout />
    </Box>
  );
};

export default AppBar;
