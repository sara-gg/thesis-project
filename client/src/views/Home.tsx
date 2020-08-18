import React from "react";
import Logout from "../components/Logout";
import { Box, Button, Heading, Image } from "grommet";
import bedroomImg from "../assets/bedroom-hero.jpeg";
import AppBar from "../components/AppBar";
import FavouritesCarousel from '../components/FavouritesCarousel'
import { Notification } from "grommet-icons";

const styles = {
  color: "black",
};

function Home() {
  return (

      <div >
        <AppBar>
          Hello There!
          <Heading level="3" margin="none">
            Login Page
          </Heading>
          <Button icon={<Notification />} onClick={() => {}} />

        </AppBar>

      <Box justify="center" align="center" background="white">
        <Image fit="contain" fill src={bedroomImg} />
        <Heading style={styles}>Welcome to announcement section</Heading>
      </Box>
      <FavouritesCarousel/>
    </div>
    
  );
}

export default Home;
