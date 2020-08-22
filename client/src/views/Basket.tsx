import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import CategoriesBar from "../components/CategoriesBar";
import "../styles/Basket.scss";
import ApiService from "../ApiService/ApiService";


type Props = {
  isAuthenticated: boolean;
};

const Basket = ({ isAuthenticated }: Props): JSX.Element => {
  const [basketProducts, setBasketProducts] = useState([]);

  useEffect(() => {
    ApiService.getBasketProducts()
      .then(res => {
        console.log('SI')
        console.log(res)
      })
    // .then(res => setBasketProducts(res));
  }, []);

  // if (isAuthenticated) {
  return (
    <div>
      <CategoriesBar />
      <h1>Your basket</h1>
    </div>
  );
  // } else {
  //   return <Redirect to={{ pathname: "/login" }} />;
  // }
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(Basket);
