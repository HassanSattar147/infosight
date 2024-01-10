"use client";
import React from "react";
import WebinarHeroSection from "./Sub/WebinarHeroSection";
import WebDemand from "./Sub/WebDemand";
import FollowUsCard from "./Sub/FollowUsCard";
import PageLayout from "../PageLayout";

const Webinars = () => {
  React.useEffect(() => {
    document.title = "Webinars";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <WebinarHeroSection />
      <p className="p-5 lg:px-20">Home / Insights / Webinars</p>
      <WebDemand />
      <FollowUsCard />
    </PageLayout>
  );
};

export default Webinars;
