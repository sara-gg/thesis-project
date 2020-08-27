import React, { useEffect, useState } from "react";
import ApiService from "../ApiService/ApiService";
import { Product } from "../models/product";
import ViewedProductCard from "./ViewedProductCard";
import { RootState } from "../models/rootstate";
<<<<<<< HEAD
import { Box, Text, Carousel, Image } from "grommet";
=======
import { Box, Text, Carousel, Heading, Image } from "grommet";
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a
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

<<<<<<< HEAD
  const renderProducts = (): JSX.Element[] => {
    let productsArr: JSX.Element[] = [];
    const resultArr: JSX.Element[] = [];
    if (products) {
        for(let i = 0; i < products.length; i ++) {
          productsArr.push(<ViewedProductCard
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
=======
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
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a
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

<<<<<<< HEAD

  return (
=======
  // const renderProducts = (): JSX.Element[] => {
  //   let productsArr: JSX.Element[] = [];
  //   const resultArr: JSX.Element[] = [];
  //   if (products) {
  //     for (let i = 0; i < products.length; i++) {
  //       productsArr.push(
  //         <ViewedProductCard
  //           product={products[i]}
  //           ownerId={products[i].user_id}
  //           visitorId={visitorIdStr}
  //           key={i}
  //         />
  //       );
  //       if ((products.length < 4 && i === products.length - 1) || i % 4 === 3) {
  //         resultArr.push(
  //           <Box
  //             direction="row"
  //             width="100%"
  //             margin="0 0 4% 0"
  //             key={i * i}
  //             justify="center"
  //           >
  //             {productsArr}
  //           </Box>
  //         );
  //         productsArr = [];
  //       }
  //     }
  //     return resultArr;
  //   } else {
  //     return [<div></div>];
  //   }
  // };

  // useEffect(() => {
  //   const products = renderProducts();
  //   setRenderedProducts(products);
  // }, [products]);
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a

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
        {/* <Box
          overflow="scroll"
          justify="center"
          direction="row-responsive"
          pad="medium"
          height="auto"
          width="100%"
          alignSelf="center"
        > */}
        {/* {products && renderedProducts ? ( */}
        <Carousel>
        { products && products.length > 0 ? <View0 /> : null }
        { products && products.length > 3 ? <View1 /> : null }
        </Carousel>
        {/* ) : (
            <Box align="center" justify="center">
              <Spinner />
            </Box>
          )} */}
        {/* </Box> */}
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
