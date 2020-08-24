import React from "react";
import { Box, Button, Heading } from "grommet";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

type Props = {
  isAuthenticated: boolean;
  setIsAuthenticated: (b: boolean) => void;
};

const Logout = ({
  isAuthenticated,
  setIsAuthenticated,
}: Props): JSX.Element => {
  let history = useHistory();

  const handleLogoutClick = () => {
    toast("You are being logged out");
    removeToken();
    handleAuth();
  };

  const handleLoginClick = () => {
    history.push("/login");
  };

  const removeToken = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
  };

  const handleAuth = () => {
    setIsAuthenticated(false);
    history.push("/");
  };

  const showButton = () => {
    if (isAuthenticated) {
      return (
        <Button
          type="reset"
          onClick={() => handleLogoutClick()}
          className="login-button"
        >
          <Heading level="4" color="text" className="navbar-header">
            Logout
          </Heading>
        </Button>
      );
    } else {
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
const mapDispatchToProps = (dispatch: any) => {
  return {
    setIsAuthenticated: (boolean: boolean) =>
      dispatch({ type: "AUTHENTICATED", payload: boolean }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
