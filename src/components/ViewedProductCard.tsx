import React from "react";
import {  Image,  } from "grommet";
import { Product } from "../models/product";


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
