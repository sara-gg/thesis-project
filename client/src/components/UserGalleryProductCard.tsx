import React from "react";
import { Box, Button, Image, Text } from "grommet";
import { Edit, Trash } from "grommet-icons";

interface Props {
  product: any;
}

function UserGalleryProductCard({ product }: Props) {
  // const handleDelete = () => {
  //   if (
  //     confirm(
  //       "Are you sure you want to delete this item? This action can not be undone"
  //     )
  //   ) {
  //     console.log("Thing was deleted.");
  //   } else {
  //     console.log("Thing was not deleted");
  //   }
  // };

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
        <Button icon={<Trash />} onClick={() => {}} />
      </Box>
    </Box>
  );
}

export default UserGalleryProductCard;
