import React from "react";
import { Box, Heading } from "grommet";
import { NavLink } from "react-router-dom";
import "./CategoriesBar.css";

const categories = [
  { name: "Bedroom", id: 0 },
  { name: "Living room", id: 1 },
  { name: "Kitchen", id: 2 },
  { name: "Bathroom", id: 3 },
];

const styles = {
  color: "#444444",
};

const CategoriesBar = (props: any) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="white"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: 1 }}
  >
    {categories.map((category) => (
      <NavLink exact to={`/category/${category.id}`}>
        <Heading level="4" style={styles} className="navbar-header">
          {category.name}
        </Heading>
      </NavLink>
    ))}
  </Box>
);

export default CategoriesBar;
