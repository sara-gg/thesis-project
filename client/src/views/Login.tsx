import React from "react";
import { Box } from "grommet";
import LoginForm from "../components/LoginForm";


function Login() {
  return (
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
  );
}

export default Login;
