import React, { useState, useEffect } from "react";
import UserGalleryProductCard from "./UserGalleryProductCard";
import { Product } from "../models/product";
import { Category } from "../models/category";
import ApiService from "../ApiService/ApiService";
import { Redirect } from "react-router";
import "../styles/CategoryPage.scss";
import { connect } from "react-redux";
import CategoriesBar from "./CategoriesBar";
import CategoryHeader from "./CategoryHeader";
import {getProductsForCategory} from "../actions";
const qs = require("qs");

interface CategoryProps {
  category: Category;
  location: any;
};

interface StateProps {
  categories: Category[];
  categoryProducts: Product[],
  categoryProductsCount: number,
}

interface DispatchProps {
  getProductsForCategory: (categoryId: number) => Promise<any>;
}

type Props = StateProps & CategoryProps & DispatchProps;

// export const renderProducts = (productList: Product[], label?: string) => {
//   let productsResult: any[]= [];

//   productList.forEach((product, index) => {
//     console.log("productList product", product);
//     if (label) {
//       productsResult
//       .sort((a, b) => (a.product.price) - (b.product.price))
//       .push(
//         <UserGalleryProductCard product={product} key={index}/>
//       )
//     } else {
//        productsResult.push(
//         <UserGalleryProductCard product={product} key={index}/>
//       )
//     };
//   })
//   return productsResult;
// }

export const renderProducts = (productList: Product[]) => {
  let productsResult: JSX.Element[] = [];

  productList.forEach((product, index) => {
    console.log("productList product", product);
    productsResult.push(
      <UserGalleryProductCard product={product} key={index} />
    );
  });
  return productsResult;
};

const CategoryPage = ({ categories, category, location, getProductsForCategory, categoryProducts, categoryProductsCount }: any) => {
  const categoryId = qs.parse(location.search)["?categoryId"];

  // const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsForCategory(categoryId)
  }, [location]);

  const categoryNamesToIds: { [categoryId: number]: string } = {};

  categories.forEach((category: Category) => {
    categoryNamesToIds[category.id] = category.name;
  });

  if (!categoryId) {
    return <Redirect to="/" />;
  }
  return (
    <div className="categoryPage">
      <CategoriesBar/>
      <CategoryHeader categoryName={categoryNamesToIds[categoryId]} categoryId={categoryId} categoryProductsCount={categoryProductsCount} renderProducts={renderProducts}/>
      <h1>{categoryNamesToIds[categoryId]}</h1>
      <div className="category-dashboard">
        {categoryProducts && categoryProducts.length > 0
          ? renderProducts(categoryProducts)
          : "no products"}
      </div>
    </div>
  );
};

const mapStateToProps = (state: StateProps) => {
  return {
    categories: state.categories,
    categoryProducts: state.categoryProducts,
    categoryProductsCount: state.categoryProductsCount,
  };
};

export default connect(mapStateToProps, {getProductsForCategory})(CategoryPage);
