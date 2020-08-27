import React, { useEffect, useState } from "react";
import { Box, Text } from "grommet";
import { Location } from "grommet-icons";
import UserProductsGallery from "../containers/UserProductsGallery";
import AppBar from "../components/AppBar";
<<<<<<< HEAD
=======
import CategoriesBar from "../components/CategoriesBar";
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a
import ApiService from "../ApiService/ApiService";
import ReviewList from "../containers/ReviewList";
import renderReviewRating from "../helpers/renderStarRating";
import renderUserIcon from "../helpers/renderUserIcon";

type Props = {
  id: string;
};

const initialGalleryInfo = {
  name: "",
  username: "",
  description: "",
  location: "",
};

const UserGallery = ({ id }: Props): JSX.Element => {
  const [galleryInfo, setGalleryInfo] = useState(initialGalleryInfo);

  const visitorIdStr: any = localStorage.getItem("userId");
  const visitorId = +visitorIdStr;
  const ownerId = +id;

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
<<<<<<< HEAD
      <AppBar/>
=======
      <AppBar />
      <CategoriesBar />
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a
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
        {renderUserIcon(ownerId, "xlarge")}
<<<<<<< HEAD
        <Text size="xlarge" color="blue">
          {galleryInfo.username}'s Gallery
=======
        <Text size="xlarge" color="blue" weight="bold" alignSelf="center">
          <span className="heading-title">
            {galleryInfo.username}'s Gallery
          </span>
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a
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
<<<<<<< HEAD
        <Text size="xlarge" color="blue">
          {galleryInfo.username}'s Products
=======
        <Text size="xlarge" color="blue" weight="bold" alignSelf="center">
          <span className="heading-title">
            {galleryInfo.username}'s products
          </span>
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a
        </Text>
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
<<<<<<< HEAD
        <Text size="xlarge" color="blue">
          {galleryInfo.username}'s Gallery Reviews
=======
        <Text size="xlarge" color="blue" weight="bold" alignSelf="center">
          <span className="heading-title">{galleryInfo.username} reviews</span>
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a
        </Text>
        <ReviewList ownerId={ownerId} />
      </Box>
    </Box>
  );
};

export default UserGallery;
