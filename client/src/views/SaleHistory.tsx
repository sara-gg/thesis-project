import React from "react";
import { useHistory } from "react-router-dom";
import CategoriesBar from "../components/CategoriesBar";
import SoldProducts from "../components/SoldProducts";


type Props = {
  isAuthenticated: boolean;
};

function SalesHistory({ isAuthenticated }: Props): any {
  let history = useHistory();

  if (isAuthenticated) {
    return (
      <>
        <CategoriesBar />
        <h1>Your Sales</h1>
        <SoldProducts />
      </>
    )
  } else {
    return history.push("/login");
  }
}

export default SalesHistory;
