import React from "react";
import AppBar from "../components/AppBar";
<<<<<<< HEAD
import { Box } from "grommet";
=======
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a
import { useHistory } from "react-router-dom";
import CategoriesBar from "../components/CategoriesBar";
import PurchasedProducts from "../containers/PurchasedProducts";
import { Box, Text } from "grommet";
import "../styles/heading-title.scss";

type Props = {
  isAuthenticated: boolean;
};

function PurchaseHistory({ isAuthenticated }: Props): any {
  let history = useHistory();

  if (isAuthenticated) {
    return (
<<<<<<< HEAD
      <>
       <AppBar />
=======
      <Box>
        <AppBar />
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a
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

          <Text size="large" alignSelf="center" margin="small">
            {" "}
            · · ·{" "}
          </Text>
          <PurchasedProducts />
        </Box>
      </Box>
    );
  } else {
    return history.push("/login");
  }
}

export default PurchaseHistory;
