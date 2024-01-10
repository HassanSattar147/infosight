import Image from "next/image";
import React from "react";
import heroImg from "../../../../public/testimonial-hero-img.png";

const TestHeroSection = () => {
  return (
    <div className="relative">
      <Image src={heroImg} alt="" className="w-full" />
      <div className="text-white bg-[#0a1f33d8] lg:bg-transparent px-5 py-5 lg:py-0 lg:p-0 lg:absolute lg:top-[35%] lg:left-[6.5%]">
        <h1 className="lg:text-[60px] text-2xl font-extrabold">Testimonials</h1>
        <p className="lg:text-xl text-sm mt-3 lg:mt-8">
          Read reviews and critical feedbacks from our esteemed clients and
          users.
        </p>
      </div>
    </div>
  );
};

export default TestHeroSection;
