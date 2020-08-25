import React from "react";
import PurchasedProducts from "../components/PurchasedProducts";
import { useHistory } from "react-router-dom";


type Props = {
  isAuthenticated: boolean;
};

function PurchaseHistory({ isAuthenticated }: Props): any {
  let history = useHistory();

  if (isAuthenticated) {
    return <PurchasedProducts />
  } else {
    return history.push("/login");
  }
}

export default PurchaseHistory;
