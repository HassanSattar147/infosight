"use client";
import React from "react";
import AboutUsCard from "./Sub/AboutUsCard";
import PageLayout from "../PageLayout";
import Breadcrumbs from "../Elements/Breadcrumbs";
import ContentContainer from "../Elements/ContentContainer";

const AboutUs = () => {
  React.useEffect(() => {
    document.title = "About InfoSight";
  }, []);

  return (
    <PageLayout hideOurServices>
      <Breadcrumbs path="Home / About Us / About Us and Company History" />
      <ContentContainer>
        <h3 className="py-5 text-xl lg:text-4xl font-extrabold ">About Us</h3>
      </ContentContainer>
      <AboutUsCard />
    </PageLayout>
  );
};

export default AboutUs;
