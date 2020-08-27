import React, { useEffect, useState } from "react";
import { Box, Button, Text } from "grommet";
import { useHistory } from "react-router-dom";
<<<<<<< HEAD
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import AppBar from "../components/AppBar";
import ApiService from '../ApiService/ApiService';
=======
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import AppBar from "../components/AppBar";
import ApiService from "../ApiService/ApiService";
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a

function SuccessfulPayment() {
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
<<<<<<< HEAD
    <AppBar />
      <Confetti
        width={width - 17}
        height={height - 17}
      />
      <Box margin="xlarge" pad="medium" align="center">
        
        <Text size='xxlarge' color='#E1BE86'>Congratulations!</Text>
        <Text margin='small'>You successfully bought the products!</Text>
=======
      <AppBar />
      <Confetti width={width - 17} height={height - 17} />
      <Box margin="xlarge" pad="medium" align="center">
        <Text size="xxlarge" color="#E1BE86">
          Congratulations!
        </Text>
        <Text margin="small">You successfully bought the products!</Text>
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a
        <Button
          margin="large"
          label="Continue shopping"
          onClick={() => {
            history.push("/home");
          }}
          primary
        />
      </Box>
    </>
  );
}

export default SuccessfulPayment;
