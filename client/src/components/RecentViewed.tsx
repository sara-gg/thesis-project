import React, { useEffect, useState } from "react";
import ApiService from "../ApiService/ApiService";
import { Product } from "../models/product";
import ViewedProductCard from "./ViewedProductCard";
import { RootState } from "../models/rootstate";
import { Box, Text, Carousel, Heading, Image } from "grommet";
import { connect } from "react-redux";
import { ReactComponent as Spinner } from "../assets/spinning.svg";

function RecentViewed() {
  const [products, setProducts] = useState<Product[]>();

  const [renderedProducts, setRenderedProducts] = useState<JSX.Element[]>();
  const visitorIdStr: any = localStorage.getItem("userId");

  useEffect(() => {
    ApiService.getViewedProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  const View0 = () => {
    if (products && products.length > 0) {
      const newProducts = products.slice(0, 3);
      return (
        <Box direction="row" width="100%" margin="0 0 4% 0">
          {newProducts.map((viewedProduct, i) => (
            <ViewedProductCard
              product={viewedProduct}
              ownerId={viewedProduct.user_id}
              visitorId={visitorIdStr}
              key={i}
            />
          ))}
        </Box>
      );
    } else {
      return <div></div>;
    }
  };

  const View1 = () => {
    if (products && products.length > 3) {
      const newProducts = products.slice(3, 6);
      return (
        <Box direction="row" width="100%" margin="0 0 4% 0">
          {newProducts.map((viewedProduct, i) => (
            <ViewedProductCard
              product={viewedProduct}
              ownerId={viewedProduct.user_id}
              visitorId={visitorIdStr}
              key={i}
            />
          ))}
        </Box>
      );
    } else {
      return <div></div>;
    }
  };


  return (
    <Box>
      <Box justify="center">
      <Box
        justify="center"
        align="center"
        background="white"
        margin-top="2%"
        margin-bottom="4%"
      >
        <Heading level="2">You've recently viewed</Heading>
      </Box>
        
        <Carousel>
        { products && products.length > 0 ? <View0 /> : null }
        { products && products.length > 3 ? <View1 /> : null }
        </Carousel>
  
      </Box>
    </Box>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: state.isAuthenticated,
    name: state.name,
  };
};

export default connect(mapStateToProps, {})(RecentViewed);
