import React from "react";
import { Box, Button, Grommet, Heading } from "grommet";
import AppBar from "../components/AppBar";
import RegistrationForm from "../components/RegistrationForm";
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
        <Box
          direction="row"
          overflow={{ horizontal: "hidden" }}
          flex
          align="center"
          justify="center"
        >
          <RegistrationForm />
        </Box>
      </Box>
    </Grommet>
  );
}

export default Register;
