import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import HeroSectionContainer from "../../Components/HeroSection/HeroSectionContainer";
import Bottom from "../../Components/Bottom/Bottom";
import Footer from "../../Components/Footer/Footer";

const homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSectionContainer />
      <div className="m-10">
        <Bottom />
      </div>
      <Footer />
    </div>
  );
};

export default homepage;
