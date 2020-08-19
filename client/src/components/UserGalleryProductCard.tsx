import React from "react";
import { Box, Button, Image, Text } from "grommet";
import { Edit, Trash } from "grommet-icons";
import { Product } from "../models/product";

interface Props {
  product: Product;
  readonly?: boolean
}

function UserGalleryProductCard({ product, readonly }: Props) {
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
      <Box height="small" width="small">
        <Image fit="cover" src={`${product.images}`} />
      </Box>
      <Box direction="column" gap="small">
        <Text>{product.title}</Text>
        <Text size="small">{product.location}</Text>
        <Text size="small">{product.price} €</Text>
      </Box>
      <Box direction="row" gap="medium">
        <Button icon={<Edit color="brand" />} onClick={() => {}} />
        {
          readonly ? '' :
        <Button icon={<Trash />} onClick={() => {}} />
        }
      </Box>
    </Box>
  );
}

export default UserGalleryProductCard;
