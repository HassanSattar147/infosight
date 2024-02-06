"use client";
import React from "react";
import CSHeroSection from "./Sub/CSHeroSection";
import AllCaseStudies from "./Sub/AllCaseStudies";
import PageLayout from "../PageLayout";
import Breadcrumbs from "../Elements/Breadcrumbs";

const CaseStudy = () => {
  React.useEffect(() => {
    document.title =
      "Infosight Case Studies Cybersecurity Solutions | InfoSight ";
  }, []);

  return null;
  return (
    <PageLayout hideOurServices>
      <CSHeroSection />
      <Breadcrumbs path="Home / Case Studies" />
      <AllCaseStudies />
    </PageLayout>
  );
};

export default CaseStudy;
