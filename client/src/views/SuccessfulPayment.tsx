import React, { useEffect } from "react";
import { Box, Button, Text } from "grommet";
import { useHistory } from "react-router-dom";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import ApiService from '../ApiService/ApiService';

function SuccessfulPayment() {
  let { width, height } = useWindowSize()
  let history = useHistory();

  // TO USE WITH REDUX
  // const removeBasketProducts = () => {
  //   basketProducts.forEach(product => {
  //     ApiService.deleteBasketProduct(product.id);
  //   });
  // }

  // useEffect(() => {
  //   removeBasketProducts();
  // }, []);

  return (
    <>
      <Confetti
        width={width - 17}
        height={height - 17}
      />
      <Box margin="xlarge" pad="medium" align="center">
        <Text size='xxlarge' color='#E1BE86'>Congratulations!</Text>
        <Text margin='small'>You successfully bought the products!</Text>
        <Button
          margin="large"
          label="Continue"
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
