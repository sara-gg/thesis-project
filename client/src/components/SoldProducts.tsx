import React, { useEffect, useState } from 'react';
import ApiService from '../ApiService/ApiService';
import { Box } from "grommet";
import UserGalleryProductCard from "./UserGalleryProductCard";
import { Product } from "../models/product";


const renderProducts = (productList: Product[]) => {
  let productsResult: JSX.Element[] = [];

  productList.forEach((product, index) => {
    productsResult.push(
      <UserGalleryProductCard product={product} key={index} />
    );
  });
  return productsResult;
};

function SoldProducts(): JSX.Element {
  const [soldProducts, setSoldProducts] = useState<Product[]>([]);

  useEffect(() => {
    ApiService.getAllSoldProducts()
      .then(res => setSoldProducts(res));
  }, []);

  return (
    <div>
      <div className="category-dashboard">
        {
          soldProducts && soldProducts.length > 0
            ? (
              <Box margin="xlarge" pad="medium" align="center">
                <div className="category-dashboard">
                  {renderProducts(soldProducts)}
                </div>
              </Box>
            )
            : "You haven't sold any product yet"
        }
      </div>
    </div>
  );
}

export default SoldProducts;
