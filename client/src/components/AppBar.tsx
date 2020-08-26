import React, { useEffect, useState } from "react";
import { Box, Button, DropButton, Heading, Image } from "grommet";
import { Cart } from "grommet-icons";
import logo from "../assets/logo.png";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logout from "../components/Logout";
import SearchBar from "../components/SearchBar/SearchBar";
import ApiService from "../ApiService/ApiService";
import UserOptionsMenu from "../components/UserOptionsMenu";
import { Product } from "../models/product";
import { connect } from "react-redux";
import "../styles/AppBar.scss";

type Props = {
  isAuthenticated: boolean;
  productsInBasket: [];
  basketProducts?: any;
};

const AppBar = ({
  isAuthenticated,
  productsInBasket,
  basketProducts,
}: Props): JSX.Element => {
  let [totalBasket, setTotalBasket] = useState(0);
  let history = useHistory();

  useEffect(() => {
    let total = 0;
    ApiService.getBasketProducts()
      .then((products) => {
        if (products) {
          products.forEach((product: any) => total++);
        }
      })
      .then(() => setTotalBasket(total));
  }, [basketProducts, productsInBasket]);

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

  const renderCart = () => {
    if (totalBasket > 0) {
      return (
        <Button
          onClick={() => {
            history.push("/basket_products");
          }}
          className="badge"
          data-badge={totalBasket}
        >
          <Cart />
        </Button>
      );
    } else {
      return (
        <Button
          onClick={() => {
            history.push("/basket_products");
          }}
        >
          <Cart />
        </Button>
      );
    }
  };

  return (
    <Box
      tag="header"
      direction="row"
      width="100%"
      align="center"
      justify="between"
      background="white"
      pad={{ left: "medium", right: "medium", vertical: "small" }}
      className="appbar"
    >
      <SearchBar />
      <NavLink exact to="/">
        <Image src={logo} height="50px" />
      </NavLink>

      <Box
        direction="row"
        align="center"
        justify="end"
        className="right-appbar"
        gap="medium"
      >
        {isAuthenticated && <UserOptionsMenu />}

        {handleRenderRegister()}

        <Logout />
        {/* TODO: add logic for badge to check basket */}
        {renderCart()}
      </Box>
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.isAuthenticated,
    productsInBasket: state.productsInBasket,
  };
};

export default connect(mapStateToProps, {})(AppBar);
