import React from "react";
import { Box, Image, Text } from "grommet";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import "../styles/heading-title.scss";
import { Product } from "../models/product";
import { toast } from "react-toastify";

type Props = {
  product: any;
  sold: boolean;
};

const HistoryProductCard = ({ product, sold }: Props) => {
  const renderSoldOptions = () => {
    if (sold) {
      return (
        <Box alignSelf="center" gap="xsmall" width="50%" align="end">
          <Box
            background="control"
            width="small"
            pad={{ vertical: "xsmall", horizontal: "medium" }}
            round="xsmall"
            align="center"
            border={{ color: "control", style: "solid", size: "xsmall" }}
            onClick={() => toast("Return this item")}
          >
            <Text size="small" color="white">
              Return this item
            </Text>
          </Box>

          <Box
            width="small"
            pad="xsmall"
            round="xsmall"
            align="center"
            border={{ color: "control", style: "solid", size: "xsmall" }}
            onClick={() => toast("Request invoice")}
          >
            <Text size="small">Request invoice</Text>
          </Box>
          <Box
            width="small"
            pad="xsmall"
            round="xsmall"
            align="center"
            border={{ color: "control", style: "solid", size: "xsmall" }}
            onClick={() => toast("Contact seller")}
          >
            <Text size="small">Contact seller</Text>
          </Box>
          <Box
            width="small"
            pad="xsmall"
            round="xsmall"
            align="center"
            border={{ color: "control", style: "solid", size: "xsmall" }}
            onClick={() => toast("Review seller")}
          >
            <Text size="small">Review seller</Text>
          </Box>
        </Box>
      );
    } else {
      return (
        <Box
          alignSelf="center"
          gap="xsmall"
          width="50%"
          align="end"
          justify="center"
        >
          <Box
            width="small"
            pad={{ vertical: "xsmall", horizontal: "medium" }}
            round="xsmall"
            align="center"
            border={{ color: "control", style: "solid", size: "xsmall" }}
            onClick={() => toast("Return this item")}
          >
            <Text size="small">Contact buyer</Text>
          </Box>
          <Box
            width="small"
            pad="xsmall"
            round="xsmall"
            align="center"
            border={{ color: "control", style: "solid", size: "xsmall" }}
            onClick={() => toast("Product details")}
          >
            <Text size="small">Product details</Text>
          </Box>
        </Box>
      );
    }
  };

  return (
    <Box
      height="small"
      width="100%"
      margin="medium"
      pad="medium"
      hoverIndicator="true"
      round="small"
      direction="row"
      background="white"
    >
      <Box width="30%">
        <Box height="small" width="small">
          <Image fit="cover" src={`${product.images}`} />
        </Box>
      </Box>
      <Box direction="column" gap="small" width="40%" pad={{ left: "medium" }}>
        <Text className="history-product-title">{product.title}</Text>
        <Text size="small">Price: {product.price} €</Text>
        <Text size="small">Quantity: {product.purchased_quantity}</Text>
        <Text size="small">
          Date: {moment(product.purchase_date).format("MMM Do YYYY")}
        </Text>
      </Box>
      {renderSoldOptions()}
    </Box>
  );
};

export default HistoryProductCard;
