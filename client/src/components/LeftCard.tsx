import React from "react";
import { Box, Grid, Heading } from "grommet";
import homepageCard from "../assets/homepage-card.jpg";

const LeftCard = () => (
  <Grid
    fill
    areas={[
      { name: "image", start: [0, 0], end: [0, 0] },
      { name: "main", start: [1, 0], end: [1, 0] },
    ]}
    columns={["50%", "flex"]}
    rows={["large"]}
    margin="4%"
  >
    <Box
      gridArea="image"
      background={{
        image: `url(${homepageCard})`,
      }}
    />
    <Box gridArea="main" background="white" align="center" justify="center">
      <Heading>Living room inspo</Heading>
      The living room is undeniably the heart of the home, where time is spent
      lounging and laughing with friends and family. Here you can find every
      ingredient for your living room with our extensive living room collection
      of sofas, side tables, lamps, rugs and home accessories.
    </Box>
  </Grid>
);

export default LeftCard;
