import React from "react";
import { Box, Button, Grommet, Heading } from "grommet";
import AppBar from "../components/AppBar";
import LoginForm from "../components/LoginForm";
import { Notification } from "grommet-icons";

const theme = {
  global: {
    colors: {
      brand: "pink",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function Login() {
  return (
    <Grommet theme={theme} full>
      <Box fill>

        <Box
          direction="row"
          overflow={{ horizontal: "hidden" }}
          flex
          align="center"
          justify="center"
        >
          <LoginForm />
        </Box>
      </Box>
    </Grommet>
  );
}

export default Login;
