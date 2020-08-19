import React from "react";
import { Box } from "grommet";
import UserGalleryProductCard from "../components/UserGalleryProductCard";
import productsData from "../mocks/product.data";
import AddNewProduct from "../components/AddNewProduct";

function UserProductsGallery() {
  const productList = () => {
    if (productsData.length === 0) {
      return <AddNewProduct />;
    } else {
      return (
        <Box
          direction="row"
          overflow="hidden"
          wrap={true}
          flex
          align="center"
          justify="center"
        >
          {productsData.map((product: any) => (
            <UserGalleryProductCard key={product.item_id} product={product} />
          ))}
        </Box>
      );
    }
  };

  return (
    <Box direction="column" flex align="center" justify="center">
      <AddNewProduct />
      {productList()}
    </Box>
  );
}

export default UserProductsGallery;
