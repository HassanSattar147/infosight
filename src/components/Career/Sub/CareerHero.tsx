import Image from "next/image";
import React from "react";
import heroImg from "../../../../public/aboutUs/about-us-hero-img.png";

const CareerHero = () => {
  return (
    <div className="relative">
      <Image src={heroImg} alt="" className="w-full" />
      <div className="text-white bg-[#0a1f33d8] lg:bg-transparent px-5 py-5 lg:py-0 lg:p-0 lg:absolute lg:top-[35%] lg:left-[6.5%]">
        <h1 className="lg:text-[60px] text-2xl font-extrabold">Careers</h1>
        <p className="lg:text-xl lg:w-[63%] text-sm mt-3 lg:mt-8">
          At InfoSight, our people are the key to our success. Our staff have
          found much more than a job - they have careers on the forefront of
          information security technology.
        </p>
      </div>
    </div>
  );
};

export default CareerHero;
