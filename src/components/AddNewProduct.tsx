import React from "react";
import { Box, Text } from "grommet";
import { AddCircle } from "grommet-icons";
import { useHistory } from "react-router-dom";

const AddNewProduct = () => {
  let history = useHistory();

  return (
    <Box
      direction="row"
      height="xsmall"
      width="medium"
      elevation="medium"
      margin="medium"
      pad="medium"
      hoverIndicator="true"
      round="small"
      align="center"
      justify="center"
      onClick={() => {
        history.push("/newproduct");
      }}
    >
      <AddCircle size="large" />
      <Text textAlign="center" margin="small">
        Add a New Product
      </Text>
    </Box>
  );
};

export default AddNewProduct;
