import React from "react";
import { Box, Button, Carousel, Image, Text } from "grommet";
import { Cart, Location } from "grommet-icons";

import productsData from "../mocks/product.data";
import CategoriesBar from "../components/CategoriesBar";

function ProductDetails() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const productId = urlParams.get("id");
  const product = productsData.filter((product) => product.id === productId)[0];

  const handleAddItemToBasket = () => {
    alert(`${product.title} has been added to your basket!`);
  };

  return (
    <Box>
      <CategoriesBar />
      <Box
        direction="row"
        overflow={{ horizontal: "hidden" }}
        flex
        align="center"
        justify="center"
        margin="large"
      >
        <Box height="medium" width="40%" margin="medium" overflow="hidden">
          <Carousel fill>
            <Image fit="cover" src={`${product.images}`} />
          </Carousel>
        </Box>
        <Box margin="large" width="50%" gap="medium">
          <Box gap="medium">
            <Text size="large">{product.title}</Text>
            <Box direction="row">
              <Text size="small">sold by: </Text>
              <Text size="small" color="grey">
                {product.user_id}
              </Text>
            </Box>
            <Box direction="row">
              <Text size="small">Dimensions (height x depth x width): </Text>
              <Text size="small" color="grey">
                {product.height} x {product.depth} x {product.width} cm
              </Text>
            </Box>
            <Text size="small">{product.description}</Text>
            <Box direction="row">
              <Location />
              <Text size="medium">{product.location}</Text>
            </Box>
            <Text size="medium">{product.price} €</Text>
          </Box>

          <Box pad="medium" direction="row">
            <Button
              label="Add to Cart"
              onClick={handleAddItemToBasket}
              primary
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// {
//   user_id: "001",
//   id: "001",
//   category_id: "bedroom",
//   title: "Fancy Bedroom Chair",
//   description: `Regal Bedroom Chair Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
//   images:
//     "https://lucas-furniture.co.uk/Photos/W653_Regal-Bedroom-Chair-5055299480113.jpg",
//   location: "Barcelona",
//   price: 350,
//   quantity: 1,
//   height: 83,
//   depth: 52,
//   width: 59,
// },

export default ProductDetails;
