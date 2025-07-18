import React from "react";
import ScrollImageHero from "../components/ScrollImageHero";
import JoinExperience from "../components/JoinExperience";

const Home = () => {
  return (
    <>
      <JoinExperience />
  

      {/* Scroll-enhanced visual experience section */}
      <ScrollImageHero />

      {/* Other homepage content like best sellers, etc. */}
    </>
  );
};
export default Home;