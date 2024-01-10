"use client";
import React from "react";
import CSHeroSection from "./Sub/CSHeroSection";
import AllCaseStudies from "./Sub/AllCaseStudies";
import PageLayout from "../PageLayout";

const CaseStudy = () => {
  React.useEffect(() => {
    document.title =
      "Infosight Case Studies Cybersecurity Solutions | InfoSight ";
  }, []);

  return (
    <PageLayout hideOurServices>
      <CSHeroSection />
      <p className="mt-5 p-5 lg:px-20">Home / Case Studies</p>
      <AllCaseStudies />
    </PageLayout>
  );
};

export default CaseStudy;
