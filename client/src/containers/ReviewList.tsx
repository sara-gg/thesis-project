import React, { useState, useEffect } from "react";
import { Box, Text } from "grommet";
import ReviewCard from "../components/ReviewCard";
import ApiService from "../ApiService/ApiService";
import { Review } from "../models/review";

type Props = {
  ownerId: number;
};

function ReviewList({ ownerId }: Props): JSX.Element {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    ApiService.getAllReviews().then((res) => {
      if (res.length !== 0) {
        const filteredReviews = res.filter(
          (review: any) => review.user_id === ownerId
        );
        setReviews(filteredReviews);
      }
    });
  }, []);

  return (
    <Box width="100%" alignSelf="center">
      {reviews.length !== 0 &&
        reviews.map((review: Review) => {
          return <ReviewCard review={review} />;
        })}
      <ReviewCard />
      <ReviewCard />
    </Box>
  );
}

export default ReviewList;
