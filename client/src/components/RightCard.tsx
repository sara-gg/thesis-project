import React from "react";
import { Box, Grid, Heading } from "grommet";
import bedroomCard from "../assets/bedroom-card.jpg";

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
    <Box gridArea="main" background="white" align="center" justify="center">
      <Heading>Bedroom inspo</Heading>
      Create the bedroom of your dreams with our sleeping beauties: lie back and
      relax in one of our seriously seductive beds, crafted in wood or metal or
      luxuriously upholstered, and topped with a sumptuous mattress and our
      beautiful bedding. Add coordinating bedside tables, drawers and wardrobes
      for a serene sanctuary that meets all of your needs.
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
