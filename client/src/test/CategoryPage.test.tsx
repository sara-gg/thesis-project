import React from "react";
import { create, ReactTestRenderer, ReactTestInstance } from "react-test-renderer";
import CategoryPage, { renderProducts } from "../components/CategoryPage"
import { Category } from "../models/category";
import { Product } from "../models/product";
import { MockProducts } from "./mocks/mock-products";
import { mockCategories } from "./mocks/mockCategories";
import UserGalleryProductCard from "../components/UserGalleryProductCard";

const renderCategoryPage = () => {}
describe("<CategoryPage />", () => {

  let category: Category;
  let productList: Product[];


  let pageHeaderEl: ReactTestInstance;
  let productDashboardEl: ReactTestInstance;

  let component: ReactTestRenderer;

  beforeEach(() => {
    category = Object.create(mockCategories[0]);
    productList = Object.create(MockProducts);
    component = create(<CategoryPage products={productList}/>)
    updateElements();
  });

  const updateElements = () => {
    pageHeaderEl = component.root.findByProps({className: 'category-header'})
  }
  test("should create", () => {
    
  })

  test("should display correctly", () => {
      expect(pageHeaderEl.children[0]).toEqual(category.name)
      // check page header is correct for category input
      // check that dashboard has same number of products as input data
  })

  test("should filter the list of products from category", () => {

  })

  test("render products create list of product", () => {
    const expectedProducts = [
      <UserGalleryProductCard product = {productList[0]} key={0} />,
      <UserGalleryProductCard product = {productList[1]} key={1} />,
      <UserGalleryProductCard product = {productList[2]} key={2} />,
    ]

    const actual = renderProducts(productList)

    expect(actual).toEqual(expectedProducts)
  })
})

