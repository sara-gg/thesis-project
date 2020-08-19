import React from "react";
import { Box, Heading } from "grommet";
import { NavLink } from "react-router-dom";

const categories = [
  { name: "Bedroom", id: 0 },
  { name: "Living room", id: 1 },
  { name: "Kitchen", id: 2 },
  { name: "Bathroom", id: 3 },
];

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
      <NavLink exact to="/">
        {category.name}
      </NavLink>
    ))}
  </Box>
);

export default CategoriesBar;
