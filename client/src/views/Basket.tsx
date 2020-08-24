import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import CategoriesBar from "../components/CategoriesBar";
import "../styles/Basket.scss";
import ApiService from "../ApiService/ApiService";
import UserGalleryProductCard from "../components/UserGalleryProductCard";
import { Product } from "../models/product";
import { Box, Text } from "grommet";
import { useHistory } from "react-router-dom";
import PaymentForm from '../components/Payment/PaymentForm';

type Props = {
  isAuthenticated: boolean;
};

const renderProducts = (productList: Product[]) => {
  let productsResult: JSX.Element[] = [];

  productList.forEach((product, index) => {
    productsResult.push(
      <UserGalleryProductCard product={product} key={index} />
    );
  });
  return productsResult;
};

function Basket({ isAuthenticated }: Props): JSX.Element {
  const [basketProducts, setBasketProducts] = useState<Product[]>([]);
  const [amoutToPay, setAmoutToPay] = useState(0);
  let history = useHistory();

  useEffect(() => {
    ApiService.getBasketProducts()
      .then(res => setBasketProducts(res));
  }, []);

  useEffect(() => {
    let total = 0;
    basketProducts.forEach(product => total += product.price);
    setAmoutToPay(total);
  }, [basketProducts]);

  alert(`isAuthenticated: ${isAuthenticated}`)
  if (isAuthenticated) {
    return (
      <div>
        <CategoriesBar />
        <h1>Your basket</h1>
        <div className="category-dashboard">
          {
            basketProducts && basketProducts.length > 0
              ? (
                <Box margin="xlarge" pad="medium" align="center">
                  <div className="category-dashboard">
                    {renderProducts(basketProducts)}
                  </div>
                  <Text margin="large"> · · · </Text>
                  <Text>Almost There!</Text>
                  <PaymentForm amoutToPay={amoutToPay} />
                </Box>
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
