import React from "react";
import { Box, Grommet } from "grommet";
import NewProductForm from "../components/NewProductForm";

const NewProduct = () => {
  return (
    <Grommet full plain>
      <Box fill align="center" justify="center">
        <NewProductForm />
      </Box>
    </Grommet>
  );
};

export default NewProduct;
