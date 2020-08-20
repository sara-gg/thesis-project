import React, { useState, useEffect } from "react";
import UserGalleryProductCard from "./UserGalleryProductCard";
import { Product } from "../models/product";
import { Category } from "../models/category";
import ApiService from "../ApiService/ApiService";
import { Redirect } from 'react-router'
import "./CategoryPage.scss"
import CategoriesBar from "./CategoriesBar"
const qs = require('qs');

type CategoryProps = {
  category: Category;
  location: any;
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

const CategoryPage = ({ category, location }: CategoryProps) => {

  const query = qs.parse(location.search)['?category'];

 

  category = JSON.parse(query)

  const [products, setProducts] = useState([]);

  useEffect(() => {
    ApiService.getProductsForCategory(category).then((res) => {
      setProducts(res.rows);
    })
  }, [])

  if(!query) {
    return (<Redirect to='/'/>)
  }
  return (
    <div className="categoryPage">
      <CategoriesBar />
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
