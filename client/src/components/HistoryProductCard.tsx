import React from "react";
import { Box, Image, Text } from "grommet";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import "../styles/heading-title.scss";

function HistoryProductCard({ product }: any) {
  return (
    <Box
      height="small"
      width="100%"
      margin="medium"
      pad="medium"
      hoverIndicator="true"
      round="small"
      direction="row"
      align="center"
      background="white"
    >
      <Box width="40%">
        <Box height="small" width="small">
          <Image fit="cover" src={`${product.images}`} />
        </Box>
      </Box>
      <Box direction="column" gap="small" width="60%" pad={{ left: "medium" }}>
        <Text className="history-product-title">{product.title}</Text>
        <Text size="small">Price: {product.price} €</Text>
        <Text size="small">Quantity: {product.purchased_quantity}</Text>
        <Text size="small">
          Date: {moment(product.pruchase_date).format("MMM Do YYYY")}
        </Text>
      </Box>
    </Box>
  );
}

export default HistoryProductCard;
