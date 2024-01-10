"use client";
import React from "react";
import { useState } from "react";
import HeroSection from "./sub/HeroSection";
import NavBar from "../Elements/NavBar";
import Latest from "./sub/Latest";
import OurServices from "./sub/OurServices";
import IndustryServices from "./sub/IndustryServices";
import Footer from "../Elements/Footer";
import FutureOrangeButtons from "../Elements/FutureOrangButtons";
import TesimonialsComp from "./sub/TesimonialComp";
import WeAre from "./sub/WeAre";
import PageLayout from "../PageLayout";

const HomePage = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.title = "InfoSight Network & Cybersecurity & Training Solutions";
  }, []);

  return (
    <PageLayout
      hideWeProvide
      hideOurServices
      hideWhyInfoSight
      hideFooterFutureSection
    >
      <HeroSection />
      <Latest />
      <WeAre />
      <OurServices heading="What we Provide" />
      <IndustryServices />
      <TesimonialsComp />
      <FutureOrangeButtons />
    </PageLayout>
  );
};

export default HomePage;
