import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Heading } from "grommet";

const RegisterButton = (): JSX.Element => {
  const history = useHistory();
  return (
    <Button
      type="reset"
      className="login-button hide"
      onClick={() => {
        history.push("/register");
      }}
    >
      <Heading level="4" color="text" className="navbar-header">
        Register
      </Heading>
    </Button>
  );
};

export default RegisterButton;
