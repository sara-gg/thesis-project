import React from "react";
import { Box, Button, Heading } from "grommet";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

type Props = {
  isAuthenticated: boolean;
  setUserData: (
    i: number,
    n: string,
    l: string,
    u: string,
    e: string,
    bd: string,
    g: string,
    a: string,
    b: boolean
  ) => void;
};

const Logout = ({ isAuthenticated, setUserData }: Props): JSX.Element => {
  let history = useHistory();

  const handleLogoutClick = () => {
    toast("You are being logged out");
    setTimeout(() => {
      removeToken();
      handleAuth();
    }, 3000);
  };

  const handleLoginClick = () => {
    history.push("/login");
  };

  const removeToken = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
  };

  const handleAuth = () => {
    setUserData(0, "", "", "", "", "", "", "", false);
    window.location.assign("http://localhost:3000/home");
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
    setUserData: (
      id: number,
      name: string,
      lastname: string,
      username: string,
      email: string,
      birthdate: string,
      gender: string,
      address: string,
      boolean: boolean
    ) =>
      dispatch({
        type: "SET_USER_DATA",
        payload: {
          id,
          name,
          lastname,
          username,
          email,
          birthdate,
          gender,
          address,
          boolean,
        },
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
