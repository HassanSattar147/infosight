"use client";
import React from "react";
import NavBar from "../Elements/NavBar";
import WhyHeroSection from "./Sub/WhyHeroSection";
import PageLayout from "../PageLayout";

const WhyUs = () => {
  React.useEffect(() => {
    document.title = "Why InfoSight";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <WhyHeroSection />
      <p className="p-5 lg:px-20">Home / About Us / Why InfoSight</p>
    </PageLayout>
  );
};

export default WhyUs;
