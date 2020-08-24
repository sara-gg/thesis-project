import React from "react";
import { Box, Button, Text } from "grommet";
import LoginForm from "../components/LoginForm";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { RootState } from "../models/rootstate";

type Props = {
  isAuthenticated: boolean;
};

function Login({ isAuthenticated }: Props): JSX.Element {
  let history = useHistory();

  if (!isAuthenticated) {
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
  } else {
    return <Redirect to={{ pathname: "/home" }} />;
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps, {})(Login);
