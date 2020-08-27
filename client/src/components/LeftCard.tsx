import React from "react";
import {
  Box,
  Button,
  Grid,
  Image,
  Heading,
  Text,
  ResponsiveContext,
} from "grommet";
import { deepMerge } from "grommet/utils";
import homepageCard from "../assets/homepage-card.jpg";
import { useHistory } from "react-router-dom";
import "../styles/homeCard.scss";
import myTheme from "../styles/theme";

const LeftCard = () => {
  let history = useHistory();

  const customBreakpoints = deepMerge(myTheme, {
    global: {
      breakpoints: {
        small: {
          value: 600,
        },
        medium: {
          value: 900,
        },
        large: {
          value: 3000,
        },
      },
    },
  });

  return (
    <div className="home-left-container">
<<<<<<< HEAD
      <Image height="50%" src={homepageCard} className="box" />
      <Box
        pad="medium"
=======
      <Image height="70%" src={homepageCard} className="box" />
      <Box
        pad={{ top: "medium", horizontal: "5vw" }}
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a
        gridArea="main"
        background="offwhite"
        align="center"
<<<<<<< HEAD
        justify="center"
=======
        justify="start"
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a
        className="home-card box"
        flex="grow"
      >
        <Heading className="home-card-header">Living room inspo</Heading>
        <Text size="large" className="home-card-desc">
          The living room is undeniably the heart of the home, where time is
          spent lounging and laughing with friends and family. Here you can find
          every ingredient for your living room with our extensive living room
          collection of sofas, side tables, lamps, rugs and home accessories.
        </Text>
        <Button
          margin={{ top: "small", bottom: "small" }}
          onClick={() => {
            history.push("/products?categoryId=2");
          }}
          label="Shop living room items"
          primary
        ></Button>
        {/* <hr style={{height:"2px", color: "gray", backgroundColor: "gray"}}/> */}
        <Heading className="home-card-header">All kitchen</Heading>
        <Text size="large" className="home-card-desc">
          Cook up a storm in the kitchen with quality cookware and accessories
          that combine form and function, and are a pleasure to use every day,
          together with storage designs you’ll be happy to display.{" "}
        </Text>
        <Button
          margin={{ top: "small", bottom: "large" }}
          onClick={() => {
            history.push("/products?categoryId=3");
          }}
          label="Shop kitchen items"
          primary
        ></Button>
      </Box>
    </div>
  );
};

export default LeftCard;
