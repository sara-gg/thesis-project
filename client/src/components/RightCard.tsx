import React from "react";
import { Box, Button, Grid, Heading, Text } from "grommet";
import bedroomCard from "../assets/bedroom-card.jpg";
import "../styles/homeCard.scss";

const RightCard = () => (
  <Grid
    fill
    areas={[
      { name: "main", start: [0, 0], end: [0, 0] },
      { name: "image", start: [1, 0], end: [1, 0] },
    ]}
    columns={["50%", "flex"]}
    rows={["large"]}
  >
    <Box
      gridArea="main"
      background="white"
      align="center"
      justify="center"
      className="home-card"
    >
      <Heading className="home-card-header">Bedroom inspo</Heading>
      <Text className="home-card-desc">
        Create the bedroom of your dreams with our sleeping beauties: lie back
        and relax in one of our seriously seductive beds, crafted in wood or
        metal or luxuriously upholstered, and topped with a sumptuous mattress
        and our beautiful bedding. Add coordinating bedside tables, drawers and
        wardrobes for a serene sanctuary that meets all of your needs.
      </Text>
      <Button
        onClick={() => {}}
        label="Shop our bedroom collection"
        primary
      ></Button>
      <Heading className="home-card-header">Bathroom</Heading>
      <Text className="home-card-desc">
        Create a bathroom you’ll want to spend a long, long time in with the
        items in our collection. From quality fittings in gleaming metal and
        warm bamboo, and accessories in intriguing materials and a kaleidoscope
        of colours, to soft and sumptuous bath linens, spotlights and ambient
        lighting, and storage for a streamlined space.
      </Text>
      <Button
        onClick={() => {}}
        label="Find the bathroom accessories for you"
        primary
      ></Button>
    </Box>
    <Box
      gridArea="image"
      background={{
        image: `url(${bedroomCard})`,
      }}
    />
  </Grid>
);

export default RightCard;
