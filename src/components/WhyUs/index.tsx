"use client";
import React from "react";
import NavBar from "../Elements/NavBar";
import WhyHeroSection from "./Sub/WhyHeroSection";
import PageLayout from "../PageLayout";
import Breadcrumbs from "../Elements/Breadcrumbs";
import { Hero } from "../Elements/ServicePageLayout";
import heroImg from "/public/why-us-hero-img.png";

const WhyUs = () => {
  React.useEffect(() => {
    document.title = "Why InfoSight";
  }, []);

  return null;
  return (
    <PageLayout hideWeProvide hideOurServices>
      <Hero
        heroTitle="Why Us?"
        heroDescription={`Case studies focus on the complexity, dynamics and circumstances of a
      single case (sometimes called a phenomenon). Multiple research methods
      are used. Cases are intensively explored in-depth, retrospectively,
      currently and sometimes over time.`}
        heroImg={heroImg}
      />
      <Breadcrumbs path="Home / About Us / Why InfoSight" />
    </PageLayout>
  );
};

export default WhyUs;
