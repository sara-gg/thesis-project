import React, { useEffect, useState } from "react";
import { Box, Heading } from "grommet";
import "../styles/CategoriesBar.scss";
import { NavLink, Route } from "react-router-dom";
import { Category } from "../models/category";
import { getCategories } from "../actions";
import { connect } from "react-redux";

const styles = {
  color: "#444444",
  paddingLeft: "20px",
};

type Props = StateProps & DispatchProps;

const CategoriesBar = ({ getCategories, categories }: Props) => {
  // const [categories, setCategories] = useState<Category[]>([]);

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
      pad={{ left: "medium", right: "medium", vertical: "small" }}
      elevation="medium"
      style={{ zIndex: 1 }}
    >
      {categories && categories.length > 0
        ? categories.map((category) => (
            <NavLink exact to={`/products?categoryId=${category.id}`}>
              <Heading level="4" style={styles} className="navbar-header">
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
