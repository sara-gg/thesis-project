import React from "react";
import { Box, Heading, Text } from "grommet";
import bedroomImg from "../assets/bedroom-hero.jpeg";
import CategoriesBar from "../components/CategoriesBar";
import FavouritesCarousel from "../components/FavouritesCarousel";
import LeftCard from "../components/LeftCard";
import RightCard from "../components/RightCard";
import "../styles/Home.scss";

function Home() {
  return (
    <div>
      <CategoriesBar />
      <Box
        justify="center"
        height="large"
        align="center"
        background={{
          image: `url(${bedroomImg})`,
        }}
      >
        <Box className="home-header-container">
          <Heading>Welcome to Furniss!</Heading>
          <Text className="home-header-description">
            Join our community. <br />
            Here people come together to make, sell, buy and collect unique,
            upcycled furniture.
          </Text>
        </Box>
      </Box>
      <Box
        justify="center"
        align="center"
        background="white"
        margin-top="2%"
        margin-bottom="4%"
      >
        <Heading size="medium">Our favourite products</Heading>
      </Box>
      <FavouritesCarousel />
      <LeftCard />
      <RightCard />
    </div>
  );
}

export default Home;
