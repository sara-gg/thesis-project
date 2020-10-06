import React, { useEffect, useState } from "react";
import { Box, Button, Menu, Image, ResponsiveContext } from "grommet";
import { Cart } from "grommet-icons";
import logo from "../assets/logo.png";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import RegisterButton from "../components/RegisterButton";
import LoginButton from "../components/LoginButton";
import SearchBar from "../components/SearchBar";
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
          products.forEach((product: Product) => total++);
        }
      })
      .then(() => setTotalBasket(total));
  }, [basketProducts, productsInBasket]);

  const handleRenderRegister = () => {
    if (!isAuthenticated) {
      return <RegisterButton />;
    } else {
      return;
    }
  };

  const renderCart = () => {
    if (isAuthenticated && totalBasket > 0) {
      return (
        <Button
          onClick={() => {
            history.push("/basket_products");
          }}
          className="badge hide"
          data-badge={totalBasket}
        >
          <Cart />
        </Button>
      );
    } else if (isAuthenticated && totalBasket <= 0) {
      return (
        <Button
          className="hide"
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
    <ResponsiveContext.Consumer>
      {(responsive) =>
        responsive === "small" ? (
          <Menu
            label={<Image src={logo} height="40px" />}
            items={[
              {
                label: "Home",
                onClick: () => {
                  history.push({
                    pathname: `/`,
                  });
                },
              },
              {
                label: "My Gallery",
                onClick: () => {
                  history.push({
                    pathname: `/usergallery/1`, // add logic for ID
                  });
                },
              },
              {
                label: "Purchase History",
                onClick: () => {},
              },
              {
                label: "Edit Profile",
                onClick: () => {},
              },
              {
                label: "Cart",
                onClick: () => {
                  history.push({
                    pathname: `/basket_products`,
                  });
                },
              },
              { label: "Component", onClick: () => {} },
            ]}
          />
        ) : (
          <Box
            tag="header"
            direction="row"
            width="100%"
            align="center"
            justify="between"
            background="white"
            pad={{ left: "medium", right: "medium", vertical: "small" }}
            className="topnav"
          >
            <SearchBar />

            <NavLink exact to="/">
              <Image src={logo} height="60px" />
            </NavLink>

            <Box
              direction="row"
              align="center"
              justify="end"
              className="right-appbar"
              gap="medium"
            >
              <LoginButton />
              {handleRenderRegister()}
              {renderCart()}
              {isAuthenticated && <UserOptionsMenu />}
            </Box>
          </Box>
        )
      }
    </ResponsiveContext.Consumer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.isAuthenticated,
    productsInBasket: state.productsInBasket,
  };
};

export default connect(mapStateToProps, {})(AppBar);
