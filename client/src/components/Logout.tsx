import React from "react";
import { Box, Button } from "grommet";
import { connect } from "react-redux";

type Props = {
  isAuthenticated: boolean;
  setIsAuthenticated: (b: boolean) => void;
};

const Logout = ({
  isAuthenticated,
  setIsAuthenticated,
}: Props): JSX.Element => {
  const handleLogoutClick = () => {
    removeToken();
    handleAuth();
  };

  const removeToken = () => {
    localStorage.removeItem("accessToken");
  };

  const handleAuth = () => {
    setIsAuthenticated(false);
    window.location.replace("http://localhost:3000/home");
  };

  // const showButton = () => {
  //   if (!isAuthenticated) {
  //     return <button>Hohoho</button>;
  //   } else {
  //     return (
  //       <Button
  //         type="reset"
  //         label="Login"
  //         onClick={() => handleLoginClick()}
  //         primary
  //       />
  //     );
  //   }
  // };

  return (
    <Box>
      <Button
        type="reset"
        label="Logout"
        onClick={() => handleLogoutClick()}
        primary
      />
    </Box>
  );
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
