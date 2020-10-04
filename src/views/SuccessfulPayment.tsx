import React, { useEffect, useState } from "react";
import { Box, Button, Text } from "grommet";
import { useHistory } from "react-router-dom";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import AppBar from "../components/AppBar";
import ApiService from "../ApiService/ApiService";
import successfulImg from "../assets/undraw_successful_purchase.svg";

const SuccessfulPayment = () => {
  const [basketProducts, setBasketProducts] = useState([]);
  let { width, height } = useWindowSize();
  let history = useHistory();

  useEffect(() => {
    ApiService.getBasketProducts().then((res) => setBasketProducts(res));
  }, []);

  useEffect(() => {
    basketProducts.forEach((product: any) => {
      ApiService.deleteBasketProduct(product.id);
      ApiService.addToPurchaseHistory(product);
    });
  }, [basketProducts]);

  return (
    <>
      <AppBar />
      <Confetti width={width - 17} height={height - 17} />
      <Box margin="xlarge" pad="medium" align="center">
        <Text size="xxlarge" color="#E1BE86">
          Congratulations!
        </Text>
        <Text margin="small">You successfully bought the products!</Text>
        <Button
          margin="large"
          label="Continue shopping"
          onClick={() => {
            history.push("/home");
          }}
          primary
        />
        <Box margin={{ bottom: "medium" }}>
          <img width="400px" src={successfulImg} alt="Successful payment"></img>
        </Box>
      </Box>
    </>
  );
};

export default SuccessfulPayment;
