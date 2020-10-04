import React from "react";
import { Box, Button, Image, Text } from "grommet";
import { Trash } from "grommet-icons";
import { Product } from "../models/product";
import { useHistory } from "react-router-dom";
import ApiService from "../ApiService/ApiService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  product: Product;
  readonly?: boolean;
}
const UserGalleryProductCard = ({ product, readonly }: Props) => {
  // const [editmode, setEditMode] = useState(false);
  let history = useHistory();

  const handleDelete = () => {
    ApiService.deleteProductFromBasket(product).then(() => {
      toast.dark(
        <Box margin="20px">
          {product.title} has been removed from your basket
        </Box>
      );
    });
  };
  return (
    <Box
      height="medium"
      width="small"
      elevation="medium"
      margin="medium"
      pad="medium"
      hoverIndicator="true"
      round="small"
    >
      <Box
        height="small"
        width="small"
        onClick={() => {
          history.push({
            pathname: "/productdetails",
            search: `?id=${product.id}`,
          });
        }}
      >
        <Image fit="cover" src={`${product.images}`} />
      </Box>
      <Box direction="column" gap="small">
        <Text>{product.title}</Text>
        <Text size="small">{product.basket_quantity}</Text>
        <Text size="small">{product.price} €</Text>
      </Box>

      <Box direction="row" gap="medium">
        <Button icon={<Trash />} onClick={handleDelete} />
      </Box>
    </Box>
  );
};

export default UserGalleryProductCard;
