import React from "react";
import Hero from "../globals/Hero";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Buttons";
import homeImg from "../../images/homeBcg.jpeg";


const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting="Welcome to"
        title="beachwalk resort"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
      >
        <PrimaryBtn t="1rem">View details</PrimaryBtn>
      </Banner>
    </Hero>
  );
};

export default Header;
