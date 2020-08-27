import React from "react";
import { Box, } from "grommet";
import NewProductForm from "../components/NewProductForm";
import AppBar from "../components/AppBar";
import newProductImg from "../assets/general-room.jpg";

const NewProduct = () => {
  return (
    <>
      <AppBar />
      <Box
        background={{
          image: `url(${newProductImg})`,
        }}
        fill
        align="center"
        justify="center"
      >
        <NewProductForm />
      </Box>
    </>
  );
};

export default NewProduct;
