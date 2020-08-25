import React, { useState } from "react";
import { Box, Button, Image, Text } from "grommet";
import { Location } from "grommet-icons";
import Skeleton from "react-loading-skeleton";
import { Product } from "../models/product";
import { useHistory } from "react-router-dom";
import "../styles/CategoryProductCard.scss";

interface Props {
  product: Product;
  readonly?: boolean;
}

function CategoryProductCard({ product, readonly }: Props) {
  let history = useHistory();

  return (
    <Box
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
      <Box height="360px">
        <Image
          fit="cover"
          height="360px"
          fill="horizontal"
          src={`${product.images}`}
        />
      </Box>

      <Box pad="2% 0 0 0" direction="column">
        <Box direction="row" gap="medium" justify="between">
          <Box width="75%">
            <Text>
              <span className="category-product-title">{product.title} </span>(
              {product.quantity})
            </Text>
          </Box>

          <Text>{product.price} €</Text>
        </Box>
        <Text size="small">
          <Location size="small" /> {product.location}
        </Text>
      </Box>
    </Box>
  );
}

export default CategoryProductCard;
