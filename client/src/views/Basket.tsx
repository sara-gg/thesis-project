import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import CategoriesBar from "../components/CategoriesBar";
import "../styles/Basket.scss";
import ApiService from "../ApiService/ApiService";
import UserGalleryProductCard from "../components/UserGalleryProductCard";
import { Product } from "../models/product";


const renderProducts = (productList: Product[]) => {
  let productsResult: JSX.Element[] = [];

  productList.forEach((product, index) => {
    console.log("productList product", product);
    productsResult.push(
      <UserGalleryProductCard product={product} key={index} />
    );
  });
  return productsResult;
};

type Props = {
  isAuthenticated: boolean;
};

function Basket({ isAuthenticated }: Props): JSX.Element {
  const [basketProducts, setBasketProducts] = useState([]);
  console.log(basketProducts)

  useEffect(() => {
    ApiService.getBasketProducts()
      .then(res => setBasketProducts(res));
  }, []);

  if (isAuthenticated) {
    return (
      <div>
        <CategoriesBar />
        <h1>Your basket</h1>
        <div className="category-dashboard">
          {
            basketProducts && basketProducts.length > 0
              ? (
                renderProducts(basketProducts)

              )
              : "No products on your basket"
          }
        </div>
      </div>
    );
  } else {
    return <Redirect to={{ pathname: "/login" }} />;
  }
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(Basket);
