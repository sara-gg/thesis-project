import React, { useState, useEffect } from "react";
import { Box, Text } from "grommet";
import ReviewCard from "../components/ReviewCard";
import ApiService from "../ApiService/ApiService";
import { Review } from "../models/review";
import reviewImg from "../assets/undraw_reviews_lp8w.svg";

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
      {reviews.length !== 0 && (
        <Box>
          <ReviewCard />
          <ReviewCard />{" "}
        </Box>
      )}
      {reviews.length === 0 && (
        <Box align="center" gap="medium">
          <Text alignSelf="center">
            This user doesn't have any reviews yet!
          </Text>
          <img width="400px" src={reviewImg}></img>
        </Box>
      )}
    </Box>
  );
}

export default ReviewList;
