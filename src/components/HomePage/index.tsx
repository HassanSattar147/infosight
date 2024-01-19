"use client";
import React from "react";
import HeroSection from "./sub/HeroSection";
import Latest from "./sub/Latest";
import OurServices from "./sub/OurServices";
import IndustryServices from "./sub/IndustryServices";
import TesimonialsComp from "./sub/TesimonialComp";
import WeAre from "./sub/WeAre";
import PageLayout from "../PageLayout/index";

const HomePage = () => {
  React.useEffect(() => {
    document.title = "InfoSight Network & Cybersecurity & Training Solutions";
  }, []);

  return (
    <PageLayout
      hideWeProvide
      hideOurServices
      hideWhyInfoSight
      isFutureBtnOrange
    >
      <HeroSection />
      <Latest />
      <WeAre />
      <OurServices heading="What we Provide" />
      <IndustryServices />
      <TesimonialsComp />
    </PageLayout>
  );
};

export default HomePage;
