import Image from "next/image";
import React from "react";
import heroImg from "../../../../public/compliance/compliance-hero-img.png";

const ComplianceHero = () => {
  return (
    <div className="relative">
      <Image src={heroImg} alt="" className="w-full" />
      <div className="text-white bg-[#0a1f33d8] lg:bg-transparent px-5 py-5 lg:py-0 lg:p-0 lg:absolute lg:top-[35%] lg:left-[6.5%]">
        <h1 className="lg:text-[60px] text-2xl font-extrabold">Compliance</h1>
        <p className="lg:text-xl text-sm mt-3 lg:mt-8">
          The compliance service ensures that a business adheres to external
          rules and internal controls.
        </p>
      </div>
    </div>
  );
};

export default ComplianceHero;
