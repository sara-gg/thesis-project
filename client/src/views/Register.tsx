import React from "react";
import { Box, Button, Heading, Grommet } from "grommet";
import AppBar from "../components/AppBar";
import { Notification } from "grommet-icons";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function Register() {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          Hello Grommet!
          <Heading level="3" margin="none">
            Register page
          </Heading>
          <Button icon={<Notification />} onClick={() => {}} />
        </AppBar>
        <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
          <Box flex align="center" justify="center">
            Register Page
          </Box>
          <Box
            width="medium"
            background="light-2"
            elevation="small"
            align="center"
            justify="center"
          >
            sidebar
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default Register;
