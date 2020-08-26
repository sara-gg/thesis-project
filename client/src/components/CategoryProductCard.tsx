import React from "react";
import { Box, Image, Text } from "grommet";
import { Location } from "grommet-icons";
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
              <span className="category-product-title">{product.title} </span>
            </Text>
            <Text margin={{ top: "5px" }}>
              <span className="category-product-qty">QTY </span>
              <span>{product.quantity} — &#x20; &#x20;</span>
              <span color="#444444">
                <Location size="small" /> {product.location}
              </span>
            </Text>
          </Box>

          <Text>{product.price} €</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default CategoryProductCard;
