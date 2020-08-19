import React from "react";
import Logout from "../components/Logout";
import { Box, Heading } from "grommet";
import bedroomImg from "../assets/bedroom-hero.jpeg";
import CategoriesBar from "../components/CategoriesBar";
import FavouritesCarousel from "../components/FavouritesCarousel";
import LeftCard from "../components/LeftCard";
import RightCard from "../components/RightCard";

const styles = {
  color: "white",
  background: "#af8e7a",
  justify: "center",
};

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
        <Box style={styles}>
          <Heading>Welcome to Chairish!</Heading>
          Join our community. <br/>
          Here people come together to make, sell, buy and
          collect unique, upcycled furniture.
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
