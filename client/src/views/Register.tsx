import React from "react";
import { Box } from "grommet";
import RegistrationForm from "../components/RegistrationForm";

function Register() {
  return (
   
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

  );
}

export default Register;
