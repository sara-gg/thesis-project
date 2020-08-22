import React, { useState } from "react";
import { Box, Button, Image, Text } from "grommet";
import { Edit, Trash, Location } from "grommet-icons";
import { Product } from "../models/product";
import { useHistory } from "react-router-dom";

interface Props {
  product: Product;
  readonly?: boolean;
}

function CategoryProductCard({ product, readonly }: Props) {
  console.log("Product details product", product);
  // const [editmode, setEditMode] = useState(false);

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
      <Image
        fit="cover"
        height="360px"
        fill="horizontal"
        src={`${product.images}`}
      />

      <Box pad="2% 0 0 0" direction="column">
        <Box direction="row" flex justify="between">
          <Text>
            <span className="product-title">{product.title} </span>(
            {product.quantity})
          </Text>
          <Text>{product.price} €</Text>
        </Box>
        <Text size="small">
          seller {product.user_id} <Location /> {product.location}
        </Text>
      </Box>
    </Box>
  );
}

export default CategoryProductCard;
