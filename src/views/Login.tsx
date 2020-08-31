import React from "react";
import { Box } from "grommet";
import LoginForm from "../components/LoginForm";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { RootState } from "../models/rootstate";
import AppBar from "../components/AppBar";
import loginImg from "../assets/general-room.jpg";

type Props = {
  isAuthenticated: boolean;
};

function Login({ isAuthenticated }: Props): JSX.Element {
  if (!isAuthenticated) {
    return (
      <>
        <AppBar />
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
          </Box>
        </Box>
      </>
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
