import React from "react";
import AppBar from "../components/AppBar";
import { Redirect } from "react-router-dom";
import CategoriesBar from "../components/CategoriesBar";
import PurchasedProducts from "../containers/PurchasedProducts";
import { Box, Text } from "grommet";
import "../styles/heading-title.scss";

type Props = {
  isAuthenticated: boolean;
};

const PurchaseHistory = ({ isAuthenticated }: Props): JSX.Element => {
  if (isAuthenticated) {
    return (
      <Box>
        <AppBar />
        <CategoriesBar />
        <Box
          direction="column"
          alignSelf="center"
          align="center"
          justify="center"
          pad="medium"
          margin={{ vertical: "large" }}
          background="offwhite"
          width="90%"
        >
          <Text size="xlarge" color="blue" weight="bold" alignSelf="center">
            <span className="heading-title">purchase history</span>
          </Text>

          <Box
            width="medium"
            border="bottom"
            alignSelf="center"
            margin={{ bottom: "medium", top: "small" }}
          ></Box>

          <Text alignSelf="center">
            Here you can find information about all your previous purchases!
          </Text>
          <PurchasedProducts />
        </Box>
      </Box>
    );
  } else {
    return <Redirect to={{ pathname: "/login" }} />;
  }
};

export default PurchaseHistory;
