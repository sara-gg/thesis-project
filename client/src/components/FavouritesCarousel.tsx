import React from "react";
import { Box, Carousel, Image } from "grommet";
import greenSofa from '../assets/green-sofa.jpg';
import rafiaCupboard from '../assets/rafia-cupboard.jpg';
import whiteRug from '../assets/white-rug.jpg';

const data = [
  greenSofa,
  rafiaCupboard,
  whiteRug,
  greenSofa,
  rafiaCupboard,
  whiteRug,
  greenSofa,
  rafiaCupboard,
  whiteRug,
];

const View0 = () => {
  const imgs = data.slice(0, 3);
  return (
    <Box direction="row" justify="between" width="100%">
      {imgs.map((img) => (
        <Image key={img} src={img} fit="contain" />
      ))}
    </Box>
  );
};
const View1 = () => {
  const imgs = data.slice(3, 6);
  return (
    <Box direction="row" width="100%">
      {imgs.map((img) => (
        <Image key={img} src={img} fit="contain" />
      ))}
    </Box>
  );
};
const View2 = () => {
  const imgs = data.slice(6);
  return (
    <Box direction="row" width="100%">
      {imgs.map((img) => (
        <Image key={img} src={img} fit="contain" />
      ))}
    </Box>
  );
};

function FavouritesCarousel() {
  return (
      <Carousel>
        <View0 />
        <View1 />
        <View2 />
      </Carousel>
    
  );
}

export default FavouritesCarousel;
