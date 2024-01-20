"use client";
import React from "react";
import TestimonialCard from "./Sub/TestimonialCard";
import PageLayout from "../PageLayout";
import Breadcrumbs from "../Elements/Breadcrumbs";
import { Hero } from "../Elements/ServicePageLayout";
import heroImg from "/public/testimonial-hero-img.png";
import ContentContainer from "../Elements/ContentContainer";

const Testimonials = () => {
  React.useEffect(() => {
    document.title = "InfoSight Testimonials";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices hideWhyInfoSight>
      <Hero
        heroImg={heroImg}
        heroTitle="Testimonials"
        heroDescription="Read reviews and critical feedbacks from our esteemed clients and users."
      />
      <Breadcrumbs path="Home / About Us / Testimonials" />
      <ContentContainer>
        <h3 className=" text-2xl lg:text-4xl font-semibold">
          Infosights Testimonials
        </h3>
      </ContentContainer>
      <TestimonialCard />
    </PageLayout>
  );
};

export default Testimonials;
