import React from "react";
import { Box, Text } from "grommet";
import ReviewCard from "../components/ReviewCard";

function ReviewList() {
  return (
    <Box width="100%" alignSelf="center">
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </Box>
  );
}

export default ReviewList;
