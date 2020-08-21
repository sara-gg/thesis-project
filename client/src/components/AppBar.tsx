import React from "react";
import { Box, Button, Heading, Image } from "grommet";
import { Cart } from "grommet-icons";
import logo from "../assets/logo.png";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logout from "../components/Logout";
import SearchBar from "../components/SearchBar/SearchBar";
import { connect } from "react-redux";
import "../styles/AppBar.scss";

type Props = {
  isAuthenticated: boolean;
};

const AppBar = ({ isAuthenticated }: Props): JSX.Element => {
  let history = useHistory();

  const handleRenderRegister = () => {
    if (!isAuthenticated) {
      return (
        <Button
          type="reset"
          className="login-button"
          onClick={() => {
            history.push("/register");
          }}
        >
          <Heading level="4" color="text" className="navbar-header">
            Register
          </Heading>
        </Button>
      );
    } else {
      return;
    }
  };

  return (
    <Box
      tag="header"
      direction="row"
      width="100%"
      align="center"
      justify="around"
      background="offwhite"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      className="appbar"
    >
      <Button
        icon={<Image src={logo} />}
        onClick={() => {
          history.push("/");
        }}
      />
      <SearchBar />
      <Box
        direction="row"
        align="center"
        justify="center"
        className="right-appbar"
        gap="medium"
        margin="large"
      >
        <NavLink exact to="/usergallery">
          <Heading level="4" color="text" className="navbar-header">
            User Gallery
          </Heading>
        </NavLink>

        <Button
          icon={<Cart />}
          onClick={() => {
            history.push("/login");
          }}
        />

        {handleRenderRegister()}

        <Logout />
      </Box>
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(AppBar);
