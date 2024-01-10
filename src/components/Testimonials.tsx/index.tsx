"use client";
import React from "react";
import Button from "../Elements/Button";
import TestimonialCard from "./Sub/TestimonialCard";
import TestHeroSection from "./Sub/TestHeroSection";
import PageLayout from "../PageLayout";

const Testimonials = () => {
  React.useEffect(() => {
    document.title = "InfoSight Testimonials";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices hideWhyInfoSight>
      <TestHeroSection />
      <p className="p-5 lg:px-20">Home / About Us / Testimonials</p>
      <div className="p-5 lg:px-20">
        <h1 className=" text-2xl lg:text-4xl font-semibold">
          Infosights Testimonials
        </h1>
        <TestimonialCard />
      </div>
    </PageLayout>
  );
};

export default Testimonials;
