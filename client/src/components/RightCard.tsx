import React from "react";
import { Box, Button, Grid, Image, Heading, Text } from "grommet";
import bedroomCard from "../assets/bedroom-card.jpg";
import { useHistory } from "react-router-dom";
import "../styles/homeCard.scss";

const RightCard = () => {
  let history = useHistory();

  return (
    <div className="home-right-container">
      <Box
        pad="medium"
        gridArea="main"
        background="offwhite"
        align="center"
        justify="center"
        className="home-card box"
        flex="grow"
      >
        <Heading className="home-card-header">Bedroom inspo</Heading>
        <Text size="large" className="home-card-desc">
          Create the bedroom of your dreams: lie back and relax in one of our
          seriously seductive beds, crafted in wood or metal or luxuriously
          upholstered. Add coordinating bedside tables, drawers and wardrobes
          for a serene sanctuary that meets all of your needs.
        </Text>
        <Button
          margin={{ bottom: "large" }}
          onClick={() => {
            history.push("products?categoryId=1");
          }}
          label="Shop our bedroom collection"
          primary
        ></Button>
        <Heading className="home-card-header">Bathroom</Heading>
        <Text size="large" className="home-card-desc">
          Create a bathroom you’ll want to spend a long, long time in with the
          items in our collection. From quality fittings in gleaming metal and
          warm bamboo, and accessories in intriguing materials and a
          kaleidoscope of colours, to soft and sumptuous bath linens, spotlights
          and ambient lighting, and storage for a streamlined space.
        </Text>
        <Button
          onClick={() => {
            history.push("/products?categoryId=4");
          }}
          label="Find the bathroom accessories for you"
          primary
        ></Button>
      </Box>
      <Image height="50%" src={bedroomCard} className="box" />
    </div>
  );
};

export default RightCard;
