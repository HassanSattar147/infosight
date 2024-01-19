"use client";
import React from "react";
import CultureSection from "./Sub/CultureSection";
import PositionCard from "./Sub/PositionCard";
import CareerCard from "./Sub/CareerCard";
import PageLayout from "../PageLayout";
import { Hero } from "../Elements/ServicePageLayout";
import heroImg from "/public/aboutUs/about-us-hero-img.png";
import Breadcrumbs from "../Elements/Breadcrumbs";

const Career = () => {
  React.useEffect(() => {
    document.title = "Cybersecurity Career Opportunity | InfoSight ";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices hideWhyInfoSight>
      <Hero
        heroTitle="Careers"
        heroDescription={`At InfoSight, our people are the key to our success. Our staff have
          found much more than a job - they have careers on the forefront of
          information security technology.`}
        heroImg={heroImg}
      />
      <Breadcrumbs path="Home / About Us / Careers" />
      <CultureSection />
      <CareerCard />
      <PositionCard />
    </PageLayout>
  );
};

export default Career;
