import React, { useState, useEffect } from "react";
import { Box, Button, Carousel, Image, Text } from "grommet";
import { Cart, Location } from "grommet-icons";
import ApiService from "../ApiService/ApiService";
import CategoriesBar from "../components/CategoriesBar";
import { Product } from "../models/product";

function ProductDetails() {
  const [product, setProduct] = useState<any>(null);

  // TODO: fetch a single product with /product?id=1
  useEffect(() => {
    ApiService.getAllProducts().then((res) => {
      const products: Product[] = res.rows;
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const productId = urlParams.get("id");
      if (productId) {
        const filteredProduct = products.filter(
          (product) => product.id === +productId //coercing productId to type number
        )[0];
        setProduct(filteredProduct);
      }
    });
  }, []);

  const handleAddItemToBasket = () => {
    alert(`${product.title} has been added to your basket!`);
  };

  return (
    <Box>
      {product && (
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
                  <Text size="small">
                    Dimensions (height x depth x width):{" "}
                  </Text>
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
      )}
    </Box>
  );
}

export default ProductDetails;
