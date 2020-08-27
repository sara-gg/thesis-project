import React, { useEffect, useState } from "react";
import { Box, Button, Heading, Menu, Image, ResponsiveContext } from "grommet";
import { Cart } from "grommet-icons";
import logo from "../assets/Furniss Logo.png";
// import croppedLogo from "../assets/logo-cropped.png";
// import logonew from "../assets/logo1.png";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logout from "../components/Logout";
import SearchBar from "../components/SearchBar/SearchBar";
import ApiService from "../ApiService/ApiService";
import UserOptionsMenu from "../components/UserOptionsMenu";
import { Product } from "../models/product";
import { connect } from "react-redux";
import "../styles/AppBar.scss";
// import { logRoles } from "@testing-library/react";

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
          className="badge hide"
          data-badge={totalBasket}
        >
          <Cart />
        </Button>
      );
    } else {
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
  const size = React.useContext(ResponsiveContext);

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
              {isAuthenticated && <UserOptionsMenu />}

              {handleRenderRegister()}

              <Logout />
              {/* TODO: add logic for badge to check basket */}
              {renderCart()}
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
