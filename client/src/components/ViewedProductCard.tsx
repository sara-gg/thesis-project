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
      <Box width="250px" height="small">
        <Image fit="cover" src={`${product.images}`} />
      </Box>
      <Box direction="column" gap="xsmall" margin={{ horizontal: "small" }}>
        <Text size="small" weight="bold">
          {product.title}
        </Text>
      </Box>
    </Box>
  ); */
  }
}

export default UserProductCard;
