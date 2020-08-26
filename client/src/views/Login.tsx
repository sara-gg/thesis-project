import React from "react";
import { Box, Button, Text } from "grommet";
import LoginForm from "../components/LoginForm";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { RootState } from "../models/rootstate";
import loginImg from "../assets/general-room.jpg";

type Props = {
  isAuthenticated: boolean;
};

function Login({ isAuthenticated }: Props): JSX.Element {
  let history = useHistory();

  if (!isAuthenticated) {
    return (
      <Box
        background={{
          opacity: "medium",
          image: `url(${loginImg})`,
        }}
      >
        <Box
          direction="column"
          overflow={{ horizontal: "hidden" }}
          margin="large"
          flex
          align="center"
          justify="center"
        >
          <LoginForm />
          <Box
            margin={{ bottom: "large" }}
            width="medium"
            pad="medium"
            align="center"
            alignSelf="center"
            background={{ color: "white", opacity: "strong" }}
            round="small"
          >
            <Text weight="bold">
              You don't have an account yet? Register here:
            </Text>
            <Text size="xlarge" margin="small">
              {" "}
              · · ·{" "}
            </Text>
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
