import React, { useEffect, useState } from "react";
import ApiService from "../ApiService/ApiService";
import { Box, Button, Text } from "grommet";
import HistoryProductCard from "./HistoryProductCard";
import { Product } from "../models/product";
import soldImg from "../assets/undraw_transfer_money_rywa.svg";
import { useHistory } from "react-router-dom";

const SoldProducts = (): JSX.Element => {
  const [soldProducts, setSoldProducts] = useState<Product[]>([]);
  const history = useHistory();

  useEffect(() => {
    ApiService.getAllSoldProducts().then((res) => {
      setSoldProducts(res);
    });
  }, []);

  return (
    <Box>
      {soldProducts && soldProducts.length > 0 ? (
        <Box pad="medium" align="center">
          {soldProducts.length !== 0 &&
            soldProducts.map((product: Product) => {
              return (
                <HistoryProductCard
                  product={product}
                  key={product.id}
                  sold={true}
                />
              );
            })}
        </Box>
      ) : (
        <Box align="center" gap="medium">
          <Text>You haven't sold any products yet!</Text>
          <Text>
            In the meantime, why don't you check what is trending now?
          </Text>
          <Button
            label="Discover New Products"
            onClick={() => history.push("/home")}
            primary
          ></Button>
          <img width="400px" src={soldImg}></img>
        </Box>
      )}
    </Box>
  );
};

export default SoldProducts;
