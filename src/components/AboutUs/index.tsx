"use client";
import React from "react";
import AboutUsCard from "./Sub/AboutUsCard";
import PageLayout from "../PageLayout";

const AboutUs = () => {
  React.useEffect(() => {
    document.title = "About InfoSight";
  }, []);

  return (
    <PageLayout hideOurServices>
      <p className="p-5 lg:px-20">
        Home / About Us / About Us and Company History
      </p>
      <h1 className="p-5 lg:px-20 text-xl lg:text-4xl font-extrabold ">
        About Us
      </h1>
      <AboutUsCard />
    </PageLayout>
  );
};

export default AboutUs;
