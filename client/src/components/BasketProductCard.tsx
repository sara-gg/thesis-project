import React, { useState } from "react";
import {
  Box,
  Button,
  Image,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
  Text,
} from "grommet";
import { Edit, Trash } from "grommet-icons";
import { Product } from "../models/product";
import { useHistory } from "react-router-dom";
import ApiService from "../ApiService/ApiService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/BasketProductCard.scss";

interface Props {
  product: Product;
  readonly?: boolean;
  basketProducts: any;
  setBasketProducts: (p: any) => void;
}
function BasketProductCard({
  product,
  setBasketProducts,
  basketProducts,
}: Props) {
  // const [editmode, setEditMode] = useState(false);
  let history = useHistory();

  const handleDelete = () => {
    ApiService.deleteProductFromBasket(product)
      .then(() => {
        toast.dark(
          <Box margin="20px">
            {product.title} has been removed from your basket
          </Box>
        );
      })
      .then(() => {
        let keepItems = basketProducts.filter(
          (p: Product) => p.id !== product.id
        );
        setBasketProducts(keepItems);
      });
  };
  return (
    <TableBody>
      <TableRow>
        <TableCell scope="row" border="bottom">
          <Box
            margin="medium"
            height="xsmall"
            width="xsmall"
            onClick={() => {
              history.push({
                pathname: "/productdetails",
                search: `?id=${product.id}`,
              });
            }}
          >
            <Image fit="cover" src={`${product.images}`} />
          </Box>
        </TableCell>
        <TableCell border="bottom" size="medium">
          <Box direction="column" gap="small">
            <Text size="large" color="headings" className="table-product-title">
              {product.title}
            </Text>
          </Box>
        </TableCell>
        <TableCell scope="row" border="bottom">
          <Text size="small">{product.basket_quantity}</Text>
        </TableCell>
        <TableCell border="bottom">
          <Text size="small">{product.price} €</Text>
        </TableCell>
        <TableCell scope="row" border="bottom">
          <Box direction="row" gap="medium">
            <Button icon={<Trash />} onClick={handleDelete} />
          </Box>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}

export default BasketProductCard;
