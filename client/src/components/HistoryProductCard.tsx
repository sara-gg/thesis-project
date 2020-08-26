import React from "react";
import { Box, Image, Text } from "grommet";
import "react-toastify/dist/ReactToastify.css";
import moment from 'moment';

function HistoryProductCard({ product }: any) {

  return (
    <Box
      height="medium"
      width="small"
      elevation="medium"
      margin="medium"
      pad="medium"
      hoverIndicator="true"
      round="small"
    >
      <Box
        height="small"
        width="small"
      >
        <Image fit="cover" src={`${product.images}`} />
      </Box>
      <Box direction="column" gap="small">
        <Text>{product.title}</Text>
        <Text size="small">{product.basket_quantity}</Text>
        <Text size="small">{product.price} €</Text>
        <Text size="small">Quantity: {product.purchased_quantity}</Text>
        <Text size="small">Date: {moment(product.pruchase_date).format("MMM Do YYYY")}</Text>
      </Box>
    </Box>
  );
}

export default HistoryProductCard;
