<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Box, Heading, ResponsiveContext } from "grommet";
=======
import React, { useEffect } from "react";
import { Box, Heading } from "grommet";
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a
import "../styles/CategoriesBar.scss";
import { NavLink } from "react-router-dom";
import { Category } from "../models/category";
import { getCategories } from "../actions";
import { connect } from "react-redux";

const styles = {
  color: "#444444",
  paddingLeft: "20px",
};

type Props = StateProps & DispatchProps;

const CategoriesBar = ({ getCategories, categories }: Props) => {
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="around"
      background="white"
      pad={{ left: "medium", right: "medium" }}
      elevation="medium"
      style={{ zIndex: 1 }}
      className="categories-bar-container"
    >
      {categories && categories.length > 0
        ? categories.map((category) => (
            <NavLink
              exact
              to={`/products?categoryId=${category.id}`}
              key={category.id}
            >
              <Heading
<<<<<<< HEAD
              responsive
=======
                responsive
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a
                level="4"
                style={styles}
                className="categories-navbar-header"
                key={category.id}
              >
                {category.name}
              </Heading>
            </NavLink>
          ))
        : "loading"}
    </Box>
  );
};

interface StateProps {
  categories: Category[];
}

const mapStateToProps = (state: StateProps) => {
  return {
    categories: state.categories,
  };
};

interface DispatchProps {
  getCategories: () => void;
}

export default connect(mapStateToProps, {
  getCategories,
})(CategoriesBar);
