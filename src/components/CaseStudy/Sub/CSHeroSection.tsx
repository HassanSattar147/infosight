import React from "react";
import heroImg from "../../../../public/casestudy/case-study-hero-img.png";
import ContentContainer from "@/components/Elements/ContentContainer";

const CSHeroSection = () => {
  return (
    <ContentContainer bgImage={heroImg}>
      <div className="md:min-h-[40vh] min-h-[30vh] flex flex-col gap-8 justify-center items-center md:items-start py-5 text-white text-center md:text-left">
        <h1 className="lg:text-[60px] text-4xl font-extrabold">Case Studies</h1>
        <p className="lg:text-xl">
          Case studies focus on the complexity, dynamics and circumstances of a
          single case (sometimes called a phenomenon). Multiple research methods
          are used. Cases are intensively explored in-depth, retrospectively,
          currently and sometimes over time.
        </p>
      </div>
    </ContentContainer>
  );
};

export default CSHeroSection;
