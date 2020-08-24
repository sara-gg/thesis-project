import React, { useState, useEffect } from "react";
import UserGalleryProductCard from "./UserGalleryProductCard";
import { Product } from "../models/product";
import { Category } from "../models/category";
import ApiService from "../ApiService/ApiService";
import { Redirect } from "react-router";
import "../styles/CategoryPage.scss";
import { connect } from "react-redux";
import CategoriesBar from "./CategoriesBar";
const qs = require("qs");

type CategoryProps = {
  category: Category;
  location: any;
};

interface StateProps {
  categories: Category[];
}

type Props = StateProps & CategoryProps;

export const renderProducts = (productList: Product[]) => {
  let productsResult: JSX.Element[] = [];

  productList.forEach((product, index) => {
    productsResult.push(
      <UserGalleryProductCard product={product} key={index} />
    );
  });
  return productsResult;
};

const CategoryPage = ({ categories, category, location }: Props) => {
  const categoryId = qs.parse(location.search)["?categoryId"];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    ApiService.getProductsForCategory(categoryId).then((res) => {
      setProducts(res.rows);
    });
  }, [location]);

  const categoryNamesToIds: { [categoryId: number]: string } = {};

  categories.forEach((category) => {
    categoryNamesToIds[category.id] = category.name;
  });

  if (!categoryId) {
    return <Redirect to="/" />;
  }
  return (
    <div className="categoryPage">
      <CategoriesBar />
      <h1 className="category-header">{categoryNamesToIds[categoryId]}</h1>
      <div className="category-dashboard">
        {products && products.length > 0
          ? renderProducts(products)
          : "no products"}
      </div>
    </div>
  );
};

const mapStateToProps = (state: StateProps) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps, {})(CategoryPage);
