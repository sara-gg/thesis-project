import React from "react";
import { Box, Button, Heading } from "grommet";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

type Props = {
  isAuthenticated: boolean;
};

const LoginButton = ({ isAuthenticated }: Props): JSX.Element => {
  let history = useHistory();

  const handleLoginClick = () => {
    history.push("/login");
  };

  const showButton = () => {
    if (!isAuthenticated) {
      return (
        <Button
          type="reset"
          onClick={() => handleLoginClick()}
          className="login-button"
        >
          <Heading level="4" color="text" className="navbar-header">
            Login
          </Heading>
        </Button>
      );
    }
  };

  return <Box>{showButton()}</Box>;
};

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps, {})(LoginButton);
