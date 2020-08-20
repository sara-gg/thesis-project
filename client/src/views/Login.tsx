import React from "react";
import { Box, Button, Text } from "grommet";
import LoginForm from "../components/LoginForm";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();

  return (
    <Box
      direction="column"
      overflow={{ horizontal: "hidden" }}
      margin="large"
      flex
      align="center"
      justify="center"
    >
      <Box>
        <LoginForm />
      </Box>
      <Box margin="xlarge" pad="medium" align="center">
        <Text margin="large"> · · · </Text>
        <Text>You don't have an account yet? Register here:</Text>
        <Button
          margin="small"
          label="Register"
          onClick={() => {
            history.push("/register");
          }}
          primary
        />
      </Box>
    </Box>
  );
}

export default Login;
