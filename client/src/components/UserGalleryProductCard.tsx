import React, { useState } from "react";
import { Box, Button, Image, Text } from "grommet";
import { Edit, Trash } from "grommet-icons";
import { Product } from "../models/product";
import { useHistory } from "react-router-dom";

interface Props {
  product: Product;
  readonly?: boolean;
}

function UserGalleryProductCard({ product, readonly }: Props) {
  console.log("Product details product", product);
  // const [editmode, setEditMode] = useState(false);

  let history = useHistory();

  return (
    <Box
      height="medium"
      width="small"
      elevation="medium"
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
      <Box height="small" width="small">
        <Image fit="cover" src={`${product.images}`} />
      </Box>
      <Box direction="column" gap="small">
        <Text>{product.title}</Text>
        <Text size="small">{product.quantity}</Text>
        <Text size="small">{product.price} €</Text>
      </Box>
    </Box>
  );
}

export default UserGalleryProductCard;
