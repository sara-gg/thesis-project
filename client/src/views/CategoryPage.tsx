import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import CategoryProductCard from "../components/CategoryProductCard";
import AppBar from "../components/AppBar";
import CategoriesBar from "../components/CategoriesBar";
import CategoryHeader from "../components/CategoryHeader";
import { connect } from "react-redux";
import { getProductsForCategory } from "../actions";
import { Product } from "../models/product";
import { Category } from "../models/category";
import SkeletonCategoryProductCard from "../components/SkeletonCategoryProductCard";
import ApiService from "../ApiService/ApiService";
import { Box, Heading } from "grommet";
import "../styles/SkeletonCategoryProductCard.scss";
import "../styles/CategoryPage.scss";

const qs = require("qs");

interface CategoryProps {
  category: Category;
  location: any;
}

interface StateProps {
  categories: Category[];
  categoryProducts: Product[];
  categoryProductsCount: number;
}

interface DispatchProps {
  getProductsForCategory: (categoryId: number) => Promise<any>;
}

type Props = StateProps & CategoryProps & DispatchProps;

export const renderProducts = (productList: Product[]) => {
  let productsResult: JSX.Element[] = [];

  productList.forEach((product, index) => {
    if (product.quantity > 0)
      productsResult.push(
        <CategoryProductCard product={product} key={index} />
      );
  });
  return productsResult;
};

const CategoryPage = ({
  categories,
  category,
  location,
  getProductsForCategory,
  categoryProducts,
  categoryProductsCount,
}: any) => {
  const categoryId = qs.parse(location.search)["?categoryId"];
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  useEffect(() => {
    setIsLoadingProducts(true);
    const timer = setTimeout(() => {
      getProductsForCategory(categoryId)
        .then(() => {
          setIsLoadingProducts(false);
        });
    }, 2000);
  }, [location]);

  const categoryNamesToIds: { [categoryId: number]: string } = {};

  categories.forEach((category: Category) => {
    categoryNamesToIds[category.id] = category.name;
  });

  if (!categoryId) {
    return <Redirect to="/" />;
  }
  return (
    <Box className="categoryPage">
      <AppBar/>
      <CategoriesBar />
      <CategoryHeader
        categoryName={categoryNamesToIds[categoryId]}
        categoryId={categoryId}
        categoryProductsCount={categoryProductsCount}
        renderProducts={renderProducts}
      />
      <Box width="100%">
        <Heading color="text" textAlign="center" alignSelf="center">
          {categoryNamesToIds[categoryId]}
        </Heading>
      </Box>
      <Box className="category-dashboard" direction="row" justify="around" wrap>
        {isLoadingProducts && <SkeletonCategoryProductCard duration={2} />}
        {!isLoadingProducts && categoryProducts && categoryProducts.length > 0
          ? renderProducts(categoryProducts)
          : "no products"}
      </Box>
    </Box>
  );
};

const mapStateToProps = (state: StateProps) => {
  return {
    categories: state.categories,
    categoryProducts: state.categoryProducts,
    categoryProductsCount: state.categoryProductsCount,
  };
};

export default connect(mapStateToProps, { getProductsForCategory })(
  CategoryPage
);
