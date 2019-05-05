import React from "react";
import Hero from "../globals/Hero";
import Banner from "../globals/Banner";
import homeImg from "../../images/homeBcg.jpeg";


const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner 
      greeting="Welcome to" 
      title="beachwalk resort"
      text= "My name is Jeff and I'm looking for a Services or Marketplace business in the business or electronics industry between $50k - $100k. "
       />
    </Hero>
  );
};

export default Header;
