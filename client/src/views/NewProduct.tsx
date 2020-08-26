import React from "react";
import { Box, Grommet } from "grommet";
import NewProductForm from "../components/NewProductForm";
import AppBar from "../components/AppBar";

const NewProduct = () => {
  return (
    <Box>
    <AppBar/>
    <Box fill align="center" justify="center" margin="5% 0">
      <NewProductForm />
    </Box>
    </Box>
  );
};

export default NewProduct;
