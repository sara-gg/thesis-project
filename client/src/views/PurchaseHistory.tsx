import React from "react";
import PurchasedProducts from "../components/PurchasedProducts";
import AppBar from "../components/AppBar";
import { useHistory } from "react-router-dom";
import { Box } from "grommet";

type Props = {
  isAuthenticated: boolean;
};

function PurchaseHistory({ isAuthenticated }: Props): any {
  let history = useHistory();

  if (isAuthenticated) {
    return (
      <Box>
        <AppBar />
        <PurchasedProducts />
      </Box>
    );
  } else {
    return history.push("/login");
  }
}

export default PurchaseHistory;
