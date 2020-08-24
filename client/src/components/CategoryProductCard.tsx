import React, { useState } from "react";
import { Box, Button, Image, Text } from "grommet";
import { Location } from "grommet-icons";
import Skeleton from 'react-loading-skeleton';
import { Product } from "../models/product";
import { useHistory } from "react-router-dom";

interface Props {
  product: Product;
  readonly?: boolean;
}

function CategoryProductCard({ product, readonly }: Props) {
  console.log("Product details product", product);

  let history = useHistory();

  return (
    <Box
      //height="medium"
      width="500px"
      //elevation="medium"
      margin="medium"
      pad="medium"
      hoverIndicator="true"
      round="small"
      onClick={() => {
        history.push({
          pathname: "/productdetails",
          search: `?id=${product.id}`,
        });
      }}
    >
      {<Image
        fit="cover"
        height="360px"
        fill="horizontal"
        src={`${product.images}`}
      />}

      <Box pad="2% 0 0 0" direction="column">
        <Box direction="row" flex justify="between">
          <Text>
            <span className="product-title">{product.title} </span>(
            {product.quantity})
          </Text>
          {<Text>{product.price} €</Text>}
        </Box>
        <Text size="small">
          seller <Location /> {product.location}
        </Text>
      </Box>
    </Box>
  );
}

export default CategoryProductCard;