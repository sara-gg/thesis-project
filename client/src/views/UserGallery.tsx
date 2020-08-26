import React, { useEffect, useState } from "react";
import { Avatar, Box, Text } from "grommet";
import { Location } from "grommet-icons";
import UserProductsGallery from "../containers/UserProductsGallery";
import { connect } from "react-redux";
import { RootState } from "../models/rootstate";
import AppBar from "../components/AppBar";
import ApiService from "../ApiService/ApiService";
import ReviewList from "../containers/ReviewList";
import renderReviewRating from "../helpers/functions";

type Props = {
  id: string;
  isAuthenticated: boolean;
  name: string;
};

const initialGalleryInfo = {
  name: "",
  username: "",
  description: "",
  location: "",
};

function UserGallery({ id, isAuthenticated, name }: Props): JSX.Element {
  const [galleryInfo, setGalleryInfo] = useState(initialGalleryInfo);

  const visitorIdStr: any = localStorage.getItem("userId");
  const visitorId = +visitorIdStr;
  const ownerId = +id;

  console.log("visitor id, owner id", visitorId, ownerId);

  useEffect(() => {
    ApiService.getPublicUserData(ownerId).then((res) => {
      setGalleryInfo((prevInfo) => ({
        ...prevInfo,
        name: res.name,
        username: res.username,
        description: res.description,
        location: res.address,
      }));
    });
  }, []);

  return (
    <Box alignSelf="center">
      <AppBar/>
      <Box
        alignSelf="center"
        width="90%"
        margin="medium"
        justify="center"
        align="center"
        gap="small"
        pad="medium"
        background="lightbeige"
      >
        <Box direction="row" gap="small">
          <Avatar
            size="xlarge"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXZmZwUr85dXnjJOdKRHI4pweV8XKRD3QMHg&usqp=CAU"
          />
        </Box>
        <Text size="xlarge" color="blue">
          {galleryInfo.name}'s Gallery
        </Text>
        <Text size="large" color="blue">
          {renderReviewRating(4.5)}
        </Text>
        <Box direction="row">
          <Location />
          <Text size="medium">{galleryInfo.location}</Text>
        </Box>
        <Text
          size="small"
          color="darkgrey"
          margin={{ vertical: "medium", horizontal: "xlarge" }}
        >
          {galleryInfo.description}
          I’ve spent years combining tried and tested joinery techniques with
          the modern mastery of technology and tools giving our final products a
          truly untouchable finish. Take a look at our items and feel free to
          ask us for any more information. I hope to provide you with one of our
          items very soon!
        </Text>
      </Box>
      <Box
        alignSelf="center"
        width="90%"
        margin="medium"
        justify="center"
        align="center"
        gap="small"
        pad="medium"
        background="offwhite"
      >
        <UserProductsGallery visitorId={visitorId} ownerId={ownerId} />
      </Box>
      <Box
        alignSelf="center"
        width="90%"
        margin="medium"
        justify="center"
        align="center"
        gap="small"
        pad="medium"
        background="offwhite"
      >
        <ReviewList ownerId={ownerId} />
      </Box>
    </Box>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: state.isAuthenticated,
    name: state.name,
  };
};

export default connect(mapStateToProps, {})(UserGallery);
