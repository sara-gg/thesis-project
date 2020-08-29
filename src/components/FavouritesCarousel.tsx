import React from "react";
import { Box, Carousel, Image } from "grommet";
import fav1 from '../assets/fav1.jpg';
import fav2 from '../assets/fav2.jpg';
import fav3 from '../assets/fav3.jpg';
import fav4 from '../assets/fav4.jpg';
import fav5 from '../assets/fav5.jpg';
import fav6 from '../assets/fav6.jpg';

const data = [
  fav1,
  fav2,
  fav3,
  fav4,
  fav5,
  fav6,
  
];

const View0 = () => {
  const imgs = data.slice(0, 3);
  return (
    <Box direction="row" justify="between" width="100%" margin="0 0 4% 0">
      {imgs.map((img) => (
        <Image key={img} src={img} fit="contain" />
      ))}
    </Box>
  );
};
const View1 = () => {
  const imgs = data.slice(3, 6);
  return (
    <Box direction="row" width="100%" margin="0 0 4% 0">
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
      </Carousel>
    
  );
}

export default FavouritesCarousel;
