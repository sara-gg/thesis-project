import React from "react";
import { Box } from "grommet";
import { Star, StarHalf } from "grommet-icons";

const renderStaticRating = (rating: number) => {
  if (rating === 5) {
    return (
      <Box direction="row">
        <Star color="staryellow" />
        <Star color="staryellow" />
        <Star color="staryellow" />
        <Star color="staryellow" />
        <Star color="staryellow" />
      </Box>
    );
  } else if (rating === 4.5) {
    return (
      <Box direction="row">
        <Star color="staryellow" />
        <Star color="staryellow" />
        <Star color="staryellow" />
        <Star color="staryellow" />
        <StarHalf color="staryellow" />
      </Box>
    );
  } else if (rating === 4) {
    return (
      <Box direction="row">
        <Star color="staryellow" />
        <Star color="staryellow" />
        <Star color="staryellow" />
        <Star color="staryellow" />
        <Star />
      </Box>
    );
  } else if (rating === 3.5) {
    return (
      <Box direction="row">
        <Star color="staryellow" />
        <Star color="staryellow" />
        <Star color="staryellow" />
        <StarHalf color="staryellow" />
        <Star />
      </Box>
    );
  } else if (rating === 3) {
    return (
      <Box direction="row">
        <Star color="staryellow" />
        <Star color="staryellow" />
        <Star color="staryellow" />
        <Star />
        <Star />
      </Box>
    );
  } else if (rating === 2.5) {
    return (
      <Box direction="row">
        <Star color="staryellow" />
        <Star color="staryellow" />
        <StarHalf color="staryellow" />
        <Star />
        <Star />
      </Box>
    );
  } else if (rating === 2) {
    return (
      <Box direction="row">
        <Star color="staryellow" />
        <Star color="staryellow" />
        <Star />
        <Star />
        <Star />
      </Box>
    );
  } else if (rating === 4) {
    return (
      <Box direction="row">
        <Star color="staryellow" />
        <StarHalf color="staryellow" />
        <Star />
        <Star />
        <Star />
      </Box>
    );
  } else if (rating === 1) {
    return (
      <Box direction="row">
        <Star color="staryellow" />
        <Star />
        <Star />
        <Star />
        <Star />
      </Box>
    );
  }
};

export default renderStaticRating;
