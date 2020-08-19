import React, { useState, useEffect } from "react";
import UserGalleryProductCard from "./UserGalleryProductCard";
import { Product } from "../models/product";
import { Category } from "../models/category";
import ApiService from "../ApiService/ApiService";

type CategoryProps = {
  category: Category;
};

export const renderProducts = (productList: Product[]) => {
  let productsResult: JSX.Element[] = [];

  productList.forEach((product, index) => {
    productsResult.push(
      <UserGalleryProductCard product={product} key={index} readonly={true} />
    );
  });
  return productsResult;
};

const CategoryPage = ({ category }: CategoryProps) => {


  // redirect if no category

  const [products, setProducts] = useState([]);

  useEffect(() => {
    ApiService.getProductsForCategory(category).then((res) => {
      setProducts(res.rows);
    })
  }, [])

  return (
    <div className="categoryPage">
      <h1 className="category-header">{category.name}</h1>
      <div className="category-dashboard">
        {products && products.length > 0
          ? renderProducts(products)
          : "no products"}
      </div>
    </div>
  );
};

export default CategoryPage;
