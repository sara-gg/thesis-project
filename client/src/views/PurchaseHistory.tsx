import React from "react";
import PurchasedProducts from "../components/PurchasedProducts";
import { Redirect } from "react-router-dom";


type Props = {
  isAuthenticated: boolean;
};

function PurchaseHistory({ isAuthenticated }: Props): JSX.Element {
  // if (isAuthenticated) {
  return <PurchasedProducts />
  // } else {
  //   return <Redirect to={{ pathname: "/login" }} />;
  // }
}

export default PurchaseHistory;
