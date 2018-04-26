import React from "react";

import Navigation from "./Navigation";
import Banner from "./Banner";
import ScrollDown from "./ScrollDown";
import mainLogo from '../assets/images/logo/Elliott-RED.png';


const Header = () => (
  <header id="home">
    <img className="logo" src={mainLogo} alt="EG logo"/>
    <Navigation />
    <Banner />
    <ScrollDown />
  </header>
);

export default Header;
