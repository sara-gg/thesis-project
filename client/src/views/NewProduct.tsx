import React from "react";
import { Box, Grommet } from "grommet";
import NewProductForm from "../components/NewProductForm";

const NewProduct = () => {
  return (
    <Box fill align="center" justify="center" margin="5% 0">
      <NewProductForm />
    </Box>
  );
};

export default NewProduct;
