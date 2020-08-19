import React from "react";
import UserGalleryProductCard from "./UserGalleryProductCard";
import { Product } from "../models/product";

type CategoryProps = {
  products: Product[],
}

export const renderProducts = (productList: Product[]) => {
  let productsResult: JSX.Element[] = [];

  productList.forEach((product, index) => {

    productsResult.push(
      <UserGalleryProductCard product = {product} key={index}/>
    )
  })
  return productsResult
} 


const CategoryPage = ({ products }: CategoryProps) => (
<div className="categoryPage">
  <h1 className="category-header">Category</h1>
  <div className="category-dashboard">
    { renderProducts(products) }
  </div>
</div>
);

export default CategoryPage;