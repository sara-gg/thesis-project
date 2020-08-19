import React from "react";
import { Box, Button, Grid, Heading, Text } from "grommet";
import homepageCard from "../assets/homepage-card.jpg";
import '../styles/homeCard.scss'

const LeftCard = () => (
  <Grid
    fill
    areas={[
      { name: "image", start: [0, 0], end: [0, 0] },
      { name: "main", start: [1, 0], end: [1, 0] },
    ]}
    columns={["50%", "flex"]}
    rows={["large"]}
    margin="4% 0 0 0"
  >
    <Box
      gridArea="image"
      background={{
        image: `url(${homepageCard})`,
      }}
    />
    <Box gridArea="main" background="white" align="center" justify="center" className="home-card">
      <Heading className="home-card-header">Living room inspo</Heading>
      <Text className="home-card-desc">
        The living room is undeniably the heart of the home, where time is spent
        lounging and laughing with friends and family. Here you can find every
        ingredient for your living room with our extensive living room
        collection of sofas, side tables, lamps, rugs and home accessories.
      </Text>
      <Button
        onClick={() => {}}
        label="Shop living room items"
        primary
      ></Button>
      <Heading className="home-card-header">All kitchen</Heading>
      <Text className="home-card-desc">
        Cook up a storm in the kitchen with quality cookware and accessories
        that combine form and function, and are a pleasure to use every day,
        together with storage designs you’ll be happy to display.{" "}
      </Text>
      <Button onClick={() => {}} label="Shop bedroom items" primary></Button>
    </Box>
  </Grid>
);

export default LeftCard;
