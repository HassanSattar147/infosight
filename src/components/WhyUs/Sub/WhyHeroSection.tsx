import Image from "next/image";
import React from "react";
import heroImg from "../../../../public/why-us-hero-img.png";

const WhyHeroSection = () => {
  return (
    <div className="relative">
      <Image src={heroImg} alt="" className="w-full" />
      <div className="text-white bg-[#0a1f33d8] lg:bg-transparent px-5 py-5 lg:py-0 lg:p-0 lg:absolute lg:top-[35%] lg:left-[6.5%]">
        <h1 className="lg:text-[60px] text-2xl font-extrabold">Why Us?</h1>
        <p className="lg:text-xl lg:w-[63%] text-sm mt-3 lg:mt-8">
          Case studies focus on the complexity, dynamics and circumstances of a
          single case (sometimes called a phenomenon). Multiple research methods
          are used. Cases are intensively explored in-depth, retrospectively,
          currently and sometimes over time.
        </p>
      </div>
    </div>
  );
};

export default WhyHeroSection;
