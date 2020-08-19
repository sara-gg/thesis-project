import React from "react";
import { Box, Button, Grommet, Heading } from "grommet";
import AppBar from "../components/AppBar";
import LoginForm from "../components/LoginForm";
import { Notification } from "grommet-icons";
import history from "../utils/history";

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
        <AppBar>
          Hello There!
          <Heading level="3" margin="none">
            Login Page
          </Heading>
          <Button icon={<Notification />} onClick={() => {}} />
        </AppBar>

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
