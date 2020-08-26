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

function PurchasedProducts(): JSX.Element {
  const [purchasedProducts, setPurchasedProducts] = useState<Product[]>([]);

  useEffect(() => {
    ApiService.getAllPurchasedProducts().then((res) =>
      setPurchasedProducts(res)
    );
  }, []);

  return (
    <div>
      <div className="category-dashboard">
        {purchasedProducts && purchasedProducts.length > 0 ? (
          <Box margin="xlarge" pad="medium" align="center">
            <div className="category-dashboard">
              {renderProducts(purchasedProducts)}
            </div>
          </Box>
        ) : (
            "You haven't bought any products yet"
          )}
      </div>
    </div>
  );
}

export default PurchasedProducts;
