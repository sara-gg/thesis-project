import React from "react";
import { Box, Heading } from "grommet";
import bedroomImg from "../assets/bedroom-hero.jpeg";
import CategoriesBar from "../components/CategoriesBar";
import FavouritesCarousel from "../components/FavouritesCarousel";
import LeftCard from "../components/LeftCard";
import RightCard from "../components/RightCard";
import SearchBar from "../components/SearchBar/SearchBar";
import { Notification } from "grommet-icons";
import AppBar from "../components/AppBar";

const styles = {
  color: "white",
  background: "#AD855E",
  justify: "center",
};

function Home() {

  return (
    <div>
      <CategoriesBar />
      <AppBar>
        Hello There!
        <Heading level="3" margin="none">
          Login Page
        </Heading>
        <Button icon={<Notification />} onClick={() => { }} />
        <SearchBar />
      </AppBar>

      <Box
        justify="center"
        height="large"
        align="center"
        background={{
          image: `url(${bedroomImg})`,
        }}
      >
        <Box style={styles}>
          <Heading>Welcome to Furniss!</Heading>
          Join our community. <br />
          Here people come together to make, sell, buy and collect unique,
          upcycled furniture.
          <br />
          <br />
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
