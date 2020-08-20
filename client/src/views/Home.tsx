import React from "react";
import Logout from "../components/Logout";
import { Box, Button, Heading } from "grommet";
import bedroomImg from "../assets/bedroom-hero.jpeg";
import AppBar from "../components/AppBar";
import FavouritesCarousel from "../components/FavouritesCarousel";
import LeftCard from "../components/LeftCard";
import RightCard from "../components/RightCard";
import SearchBar from "../components/SearchBar/SearchBar";
import { Notification } from "grommet-icons";

const styles = {
  color: "white",
  background: "#af8e7a",
};

function Home() {
  return (
    <div>
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
          <Heading>Welcome to our unnamed website!</Heading>
        Join our community. Here people come together to make, sell, buy and collect unique, upcycled furniture.
        <br />
          <br />
        </Box>

      </Box>
      <Box justify="center" align="center" background="white" margin-top="2%" margin-bottom="4%">
        <Heading size="medium">Our favourite products</Heading>
      </Box>
      <FavouritesCarousel />
      <LeftCard />
      <RightCard />
    </div>
  );
}

export default Home;
