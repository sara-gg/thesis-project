import React, { useState } from "react";
import { Box, Button, Image, Text } from "grommet";
import { Edit, Trash } from "grommet-icons";
import { Product } from "../models/product";
import { useHistory } from "react-router-dom";

interface Props {
  product: Product;
  readonly?: boolean;
}

function UserProductCard({ product, readonly }: Props) {
  console.log("Product details product", product);

  let history = useHistory();

  return (
    <Box
      height="auto"
      width="small"
      margin="small"
      pad="small"
      background="white"
      hoverIndicator="true"
      round="small"
      onClick={() => {
        history.push({
          pathname: "/productdetails",
          search: `?id=${product.id}`,
        });
      }}
    >
      <Box height="xsmall" width="small">
        <Image fit="cover" src={`${product.images}`} />
      </Box>
      <Box direction="column" gap="xsmall" margin={{ horizontal: "small" }}>
        <Text size="small" weight="bold">
          {product.title}
        </Text>
        <Text size="small">quantity: {product.quantity}</Text>
        <Text size="small">{product.price} €</Text>
      </Box>
      <Box direction="row" alignSelf="center" gap="medium">
        <Button
          icon={<Edit color="brand" />}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
        <Button
          icon={<Trash color="darkred" />}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      </Box>
    </Box>
  );
}

export default UserProductCard;
