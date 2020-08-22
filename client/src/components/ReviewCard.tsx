import React from "react";
import { Box, Text } from "grommet";

function ReviewCard() {
  return (
    <Box
      background="white"
      width="100%"
      round="xsmall"
      pad="small"
      alignSelf="center"
      margin={{ vertical: "small", horizontal: "large" }}
    >
      <Text>rating</Text>
      <Text size="small">This is a review description</Text>
    </Box>
  );
}

export default ReviewCard;
