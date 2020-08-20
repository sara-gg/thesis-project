import React, { useEffect, useState } from "react";
import { Box, Heading } from "grommet";

import { NavLink, Route } from "react-router-dom";
import CategoryPage from "./CategoryPage"
import { Category } from "../models/category";
import ApiService from "../ApiService/ApiService";



const styles = {
  color: "#444444",
  paddingLeft: "20px",
};

const CategoriesBar = () => {

  const [categories, setCategories] = useState<Category[]>([]);


  useEffect(() => {
    ApiService.getCategories().then((res) => {
      setCategories(res)
    })
  }, []);

  return (<Box
    tag="header"
    direction="row"
    align="center"
    justify="around"
    background="white"
    pad={{ left: "medium", right: "medium", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: 1 }}
  >
    {categories && categories.length > 0 ? categories.map((category) => (
      <NavLink exact to={`/category/products?category=${JSON.stringify(category)}`}>
        <Heading level="4" style={styles} className="navbar-header">
          {category.name}
        </Heading>
      </NavLink>
    )) : 'loading'}
  </Box>
  )
};

export default CategoriesBar;
