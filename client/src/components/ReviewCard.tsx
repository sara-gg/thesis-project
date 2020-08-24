import React, { useState } from "react";
import { Box, Text } from "grommet";
import renderReviewRating from "../helpers/functions";

function ReviewCard() {
  const rating = Math.ceil((Math.random() * 10) / 2);
  return (
    <Box
      background="white"
      width="100%"
      round="xsmall"
      pad="small"
      alignSelf="center"
      margin={{ vertical: "small", horizontal: "large" }}
    >
      {renderReviewRating(rating)}
      <Text size="small">This is a review description</Text>
    </Box>
  );
}

export default ReviewCard;
