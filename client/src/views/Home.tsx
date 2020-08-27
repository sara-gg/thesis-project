import React from "react";
import { Box, Heading, Text } from "grommet";
import bedroomImg from "../assets/anewseason.jpg";
import option2 from "../assets/hmgoepprod2.jpeg";
import FavouritesCarousel from "../components/FavouritesCarousel";
import LeftCard from "../components/LeftCard";
import RightCard from "../components/RightCard";
import AppBar from "../components/AppBar";
import CategoriesBar from "../components/CategoriesBar";
import RecentViewed from "../components/RecentViewed";
import "../styles/Home.scss";
import { RootState } from "../models/rootstate";
import { connect } from "react-redux";

function Home() {
  const visitorIdStr: any = localStorage.getItem("userId");

  return (
    <div>
      <AppBar />
      <CategoriesBar />
      <Box
        justify="center"
        height="80vh"
        align="center"
        background={{
          image: `url(${bedroomImg})`,
        }}
      >
        <Box height="small" className="home-header-container">
          <Heading level="1">Welcome to Furniss!</Heading>
          <Text className="home-header-description" weight="bold" size="large">
            Here people come together to make, sell, and buy unique, upcycled
            furniture.
          </Text>
        </Box>
      </Box>

      {visitorIdStr ? (
        <RecentViewed />
      ) : (
        <div style={{ display: "none" }}></div>
      )}
      <LeftCard />

      <RightCard />
      <Box
        justify="center"
        align="center"
        background="white"
        margin-top="2%"
        margin-bottom="4%"
      >
        <Heading level="2">Our favourite products</Heading>
      </Box>
      <FavouritesCarousel />
<<<<<<< HEAD
      {visitorIdStr ? (
        <RecentViewed />
      ) : (
        <div style={{ display: "none" }}></div>
      )}
      <LeftCard />
      <RightCard />
=======
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: state.isAuthenticated,
    name: state.name,
  };
};

export default connect(mapStateToProps, {})(Home);
