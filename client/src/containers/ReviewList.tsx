import React, { useState, useEffect } from "react";
import { Box, Text } from "grommet";
import ReviewCard from "../components/ReviewCard";
import ApiService from "../ApiService/ApiService";

type Props = {
  ownerId: number;
};

type Review = {
  author_id: number;
  content: string;
  createdAt?: string;
  id: number;
  rating: number;
  updatedAt?: string;
  user_id: number;
};

function ReviewList({ ownerId }: Props): JSX.Element {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    ApiService.getAllReviews().then((res) => {
      console.log("all reviews in usergallery", res);
      if (res.length !== 0) {
        const filteredReviews = res.filter(
          (review: any) => review.user_id === ownerId
        );
        console.log("filteredReviews", filteredReviews);
        setReviews(filteredReviews);
        console.log("reviews");
      }
    });
  }, []);

  return (
    <Box width="100%" alignSelf="center">
      {reviews.length !== 0 &&
        reviews.map((review: any) => {
          return <ReviewCard review={review} />;
        })}
      <ReviewCard />
      <ReviewCard />
    </Box>
  );
}

export default ReviewList;
