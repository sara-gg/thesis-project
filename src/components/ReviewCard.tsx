import React from "react";
import { Box, Text } from "grommet";
import renderReviewRating from "../helpers/renderStarRating";

type Props = {
  review?: any;
};

const ReviewCard = ({ review }: Props): JSX.Element => {
  let rating = 0;
  let content = "";

  if (review && review.rating && review.content) {
    rating = review.rating;
    content = review.content;
  } else {
    rating = Math.ceil((Math.random() * 10) / 2);
    if (rating >= 4) {
      content =
        "Really satisfyed with my purchase to this user! Very friendly and helpful, ant the delivery arrived right on time! They always have new cool furniture, I would buy here again!";
    } else if (rating >= 3) {
      content =
        "The delivery was a bit slow, and the user was rude when I tried to tell him about it. Really good quality item though, overall it was worth it!";
    } else {
      content =
        "Very disappointed about my purchase, the quality didn't match my expectations. The item didn't look like in the photo and it wasn't even secured properly so it got damaged on the way! I don't reccomend buying from this user.";
    }
  }

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
      <Text size="small">{content}</Text>
    </Box>
  );
};

export default ReviewCard;
