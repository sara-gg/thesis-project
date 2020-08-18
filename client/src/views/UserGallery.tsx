import React, { useState } from "react";
import { Box, Button, Grommet, Heading } from "grommet";
import AppBar from "../components/AppBar";
import UserGalleryProductCard from "../components/UserGalleryProductCard";
import { Home, Notification } from "grommet-icons";
import productsData from "../mocks/product.data";
import AddNewProduct from "../components/AddNewProduct";

const theme = {
  global: {
    colors: {
      brand: "purple",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function UserGallery() {
  // const [productsData, setProductData] = useState(productsData);

  console.log(productsData);
  const productList = () => {
    if (productsData.length === 0) {
      return <AddNewProduct />;
    } else {
      return (
        <div flex-direction="row">
          <AddNewProduct />
          {productsData.map((product: any) => (
            <UserGalleryProductCard key={product.item_id} product={product} />
          ))}
        </div>
      );
    }
  };

  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          Hello There!
          <Heading level="3" margin="none">
            User Gallery
          </Heading>
          <Button icon={<Home />} onClick={() => {}} />
        </AppBar>
        <h1>Gallery Name</h1>
        <Box
          direction="column"
          overflow={{ horizontal: "hidden" }}
          flex
          align="center"
          justify="start"
        >
          {productList()}
        </Box>
      </Box>
    </Grommet>
  );
}

export default UserGallery;
