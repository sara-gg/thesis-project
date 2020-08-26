import React, { useEffect, useState } from "react";
import { Box, Text } from "grommet";
import UserProductCard from "../components/UserProductCard";
import AddNewProduct from "../components/AddNewProduct";
import ApiService from "../ApiService/ApiService";
import { Product } from "../models/product";
import "../styles/UserProductsGallery.scss";

type Props = {
  visitorId: number;
  ownerId: number;
};

function UserProductsGallery({ visitorId, ownerId }: Props): JSX.Element {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ApiService.getProductsForUser(ownerId).then((res) => {
      setProducts(
        res.rows.sort(
          (a: Product, b: Product) =>
            +new Date(b.createdAt) - +new Date(a.createdAt)
        )
      );
    });
  }, [products]);

  const addNewProduct = () => {
    if (visitorId === ownerId) {
      return <AddNewProduct />;
    } else {
      return;
    }
  };

  const productList = () => {
    if (products.length === 0) {
      if (visitorId === ownerId) {
        return (
          <Box>
            <Text> Add products to your gallery to start to sell! </Text>
          </Box>
        );
      } else {
        return (
          <Box>
            <Text> This user doesn't have any products to sell! </Text>
          </Box>
        );
      }
    } else {
      return (
        <Box
          direction="row"
          overflow="hidden"
          wrap={true}
          flex
          align="start"
          justify="center"
        >
          {products.length !== 0 &&
            products.map((product: any) => {
              if (product && product.quantity === 0) {
                return (
                  <div className="soldProduct">
                    <UserProductCard
                      key={product.item_id}
                      product={product}
                      visitorId={visitorId}
                      ownerId={ownerId}
                    />
                  </div>
                );
              } else {
                return (
                  <UserProductCard
                    key={product.item_id}
                    product={product}
                    visitorId={visitorId}
                    ownerId={ownerId}
                  />
                );
              }
            })}
        </Box>
      );
    }
  };

  return (
    <Box direction="column" flex align="center" justify="center">
      {addNewProduct()}
      {productList()}
    </Box>
  );
}

export default UserProductsGallery;
