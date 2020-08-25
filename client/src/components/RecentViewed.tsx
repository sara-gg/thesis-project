import React, { useEffect, useState } from "react";
import ApiService from "../ApiService/ApiService";
import { Product } from "../models/product";
import UserProductCard from "./UserProductCard";
import { RootState } from "../models/rootstate";
import { Box, Text, Carousel } from "grommet";
import { connect } from "react-redux";
import { ReactComponent as Spinner } from '../assets/spinning.svg'

function RecentViewed() {
  const [products, setProducts] = useState<Product[]>();

  const [renderedProducts, setRenderedProducts] = useState<JSX.Element[]>();
  const visitorIdStr: any = localStorage.getItem("userId");

  useEffect(() => {
    ApiService.getViewedProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  const renderProducts = (): JSX.Element[] => {
    let productsArr: JSX.Element[] = [];
    const resultArr: JSX.Element[] = [];
    if (products) {
        for(let i = 0; i < products.length; i ++) {
          productsArr.push(<UserProductCard
            product={products[i]}
            ownerId={products[i].user_id}
            visitorId={visitorIdStr}
            key={i}
          />)
          if((products.length < 4 && i === products.length -1) || i % 4 === 3) {
            resultArr.push(
              <Box direction="row" width="100%" margin="0 0 4% 0" key={i*i} justify="center">
                {productsArr}
              </Box>
            )
            productsArr = [];
          } 
        }
      return resultArr;
    } else {
      return [<div></div>];
    }
  };

  useEffect(() => {
    const products = renderProducts();
    setRenderedProducts(products);
  }, [products]);

  return (

    <Box>
      <Box justify="center">
        <Text alignSelf="center" size="medium" weight="bold">
          Recently Viewed
        </Text>
        <Box
          overflow="scroll"
          justify="center"
          direction="row-responsive"
          pad="medium"
          height="auto"
          width="100%"
          alignSelf="center"
        >
          {products && renderedProducts ? (
            <Carousel fill>
            {renderedProducts}
            </Carousel>
          ) : (
            <Box align="center" justify="center">
              <Spinner />              
            </Box>
          )}
        </Box>
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
