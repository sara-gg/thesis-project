import React, { useState, useEffect } from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Pinterest,
  Youtube,
} from "grommet-icons";
import "./Footer.scss";

const Foot = () => {
  return (
    <footer>
      <div className="foot-info">

      <div className="about">
        <h3>About Us</h3>
        <p>
          Here at Furniss, we are passionate about sustainable furniture. We
          wanted to create a space where people can browse upcycled and preloved
          furniture or sell their own.
        </p>
      </div>

      <div className="help-and-advice">
        <h3>Help & Advice</h3>
        <p>Contact us</p>
        <p>Frequently asked questions</p>
        <p>COVID-19</p>
        <p>Payment Options</p>
        <p>Buying and care guides</p>
        <p>Careers</p>
      </div>

      <div className="find-us">
        <h3>Find Us</h3>
        <div>
          <Instagram color="offwhite" className="icon" />
          <Twitter color="offwhite" className="icon" />
          <Facebook color="offwhite" className="icon" />
          <Pinterest color="offwhite" className="icon" />
          <Youtube color="offwhite" className="icon" />
        </div>
      </div>
      </div>
      <div className="license">
        <p>Copyright &copy; 2020 All Rights Reserved by Furniss</p>
      </div>
    </footer>
  );
};

export default Foot;
