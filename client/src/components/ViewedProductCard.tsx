import React, { useState } from "react";
import { Box, Button, Image, Text } from "grommet";
import { Edit, Trash } from "grommet-icons";
import { Product } from "../models/product";
import { useHistory } from "react-router-dom";
import ApiService from "../ApiService/ApiService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

interface Props {
  product: Product;
  visitorId: number;
  ownerId?: number;
  readonly?: boolean;
}

function UserProductCard({ product, visitorId, ownerId }: Props) {
  let history = useHistory();

<<<<<<< HEAD

  return (
    <Box
      height="auto"
      width="small"
=======
  return (
    <Image
      fit="contain"
      height="250px"
      width="250px"
      src={`${product.images}`}
    />
  );
  {
    /* 
  return (
    <Box
      //height="15%"
      width="100%"
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a
      margin="small"
      pad="small"
      background="white"
      hoverIndicator="true"
      round="small"
      onClick={() => {
        history.push({
          pathname: "/productdetails",
          search: `?id=${product.id}`,
        });
      }}
    >
<<<<<<< HEAD
      <Box height="xsmall" width="small">
=======
      <Box width="250px" height="small">
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a
        <Image fit="cover" src={`${product.images}`} />
      </Box>
      <Box direction="column" gap="xsmall" margin={{ horizontal: "small" }}>
        <Text size="small" weight="bold">
          {product.title}
        </Text>
<<<<<<< HEAD
        <Text size="small">{product.price} €</Text>
      </Box>
    </Box>
  );
}

export default UserProductCard;
=======
      </Box>
    </Box>
  ); */
  }
}

export default UserProductCard;
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a
