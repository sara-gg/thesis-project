import React, { useEffect, useState } from "react";
import ApiService from "../ApiService/ApiService";
import { Box, Button, Text } from "grommet";
import HistoryProductCard from "../components/HistoryProductCard";
import { Product } from "../models/product";
import { useHistory } from "react-router-dom";
import img from "../assets/undraw_deliveries_131a.svg";

const PurchasedProducts = (): JSX.Element => {
  const [purchasedProducts, setPurchasedProducts] = useState<Product[]>([]);
  const history = useHistory();

  useEffect(() => {
    ApiService.getAllPurchasedProducts().then((res) =>
      setPurchasedProducts(res)
    );
  }, []);

  return (
    <Box>
      {purchasedProducts && purchasedProducts.length > 0 ? (
        <Box pad="medium" align="center">
          {purchasedProducts.length !== 0 &&
            purchasedProducts.map((product: Product) => {
              return (
                <HistoryProductCard
                  product={product}
                  key={product.id}
                  sold={false}
                />
              );
            })}
        </Box>
      ) : (
        <Box align="center" gap="medium">
          <Text>You haven't bought any products yet!</Text>
          <Text>Check out what is new for you: </Text>
          <Button
            margin={{ top: "small" }}
            label="Discover New Products"
            onClick={() => history.push("/home")}
            primary
          ></Button>
          <img width="400px" src={img} alt="No products bought yet"></img>
        </Box>
      )}
    </Box>
  );
};

export default PurchasedProducts;
