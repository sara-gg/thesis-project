import React from "react";
import { Box, Button, Text } from "grommet";
import RegistrationForm from "../components/RegistrationForm";
import { useHistory } from "react-router-dom";

function Register() {
  let history = useHistory();
  return (
    <Box>
      <Box
        direction="row"
        overflow={{ horizontal: "hidden" }}
        flex
        align="center"
        justify="center"
        margin="large"
      >
        <RegistrationForm />
      </Box>
      <Box pad="medium" align="center">
        <Text margin="large"> · · · </Text>
        <Text>Do you already have an account? Login here:</Text>
        <Button
          margin="small"
          label="Login"
          onClick={() => {
            history.push("/login");
          }}
          primary
        />
      </Box>
    </Box>
  );
}

export default Register;
