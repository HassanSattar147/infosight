import Image from "next/image";
import React from "react";
import heroImg from "../../../../public/partners/partners-hero-img.png";
const PartnersHeroSecton = () => {
  return (
    <div className="relative">
      <Image src={heroImg} alt="" className="w-full" />
      <div className="text-white bg-[#112c46d8] lg:bg-transparent px-5 py-5 lg:py-0 lg:p-0 lg:absolute lg:top-[35%] lg:left-[6.5%]">
        <h1 className="lg:text-[60px] text-2xl font-extrabold">Partners</h1>
        <p className="lg:text-xl text-sm mt-3 lg:mt-8">
          Building trust and securing products of our industry leading partners.
        </p>
      </div>
    </div>
  );
};

export default PartnersHeroSecton;
