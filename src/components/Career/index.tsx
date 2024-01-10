"use client";
import React from "react";
import CultureSection from "./Sub/CultureSection";
import PositionCard from "./Sub/PositionCard";
import CareerHero from "./Sub/CareerHero";
import CareerCard from "./Sub/CareerCard";
import PageLayout from "../PageLayout";

const Career = () => {
  React.useEffect(() => {
    document.title = "Cybersecurity Career Opportunity | InfoSight ";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices hideWhyInfoSight>
      <CareerHero />
      <p className="p-5 lg:px-20">Home / About Us / Careers</p>
      <CultureSection />
      <CareerCard />
      <PositionCard />
    </PageLayout>
  );
};

export default Career;
