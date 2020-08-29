import React from "react";
import { Box, Footer, Grid } from "grommet";
import {
  Instagram,
  Twitter,
  Facebook,
  Pinterest,
  Youtube,
} from "grommet-icons";
import "../styles/Footer.scss";

const Foot = () => {
  return (
    <Footer direction="column" pad={{ horizontal: "none", vertical: "medium" }}>
      <Box className="foot-info" direction="row" gap="xlarge">
        <Grid className="about" alignSelf="start">
          <h3>About Us</h3>
          <p>
            Here at Furniss, we are passionate about sustainable furniture. We
            wanted to create a space where people can browse upcycled and
            preloved furniture or sell their own.
          </p>
        </Grid>

        <Grid className="help-and-advice">
          <h3>Help & Advice</h3>
          <p>Contact us</p>
          <p>Frequently asked questions</p>
          <p>COVID-19</p>
          <p>Payment Options</p>
          <p>Buying and care guides</p>
          <p>Careers</p>
        </Grid>

        <Grid className="find-us">
          <h3>Find Us</h3>
          <Box direction="row">
            <Instagram color="offwhite" className="icon" />
            <Twitter color="offwhite" className="icon" />
            <Facebook color="offwhite" className="icon" />
            <Pinterest color="offwhite" className="icon" />
            <Youtube color="offwhite" className="icon" />
          </Box>
        </Grid>
      </Box>

      <Box className="license">
        <p>Copyright &copy; 2020 All Rights Reserved by Furniss</p>
      </Box>
    </Footer>
  );
};

export default Foot;
