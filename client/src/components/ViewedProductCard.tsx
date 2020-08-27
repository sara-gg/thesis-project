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


  return (
    <Image
      fit="contain"
      height="250px"
      width="250px"
      src={`${product.images}`}
    />
  );
};

export default UserProductCard;
