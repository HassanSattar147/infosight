import Image from "next/image";
import React from "react";
import heroImg from "../../../../public/audit/Audit-img.png";

const ITGeneralControlHero = () => {
  return (
    <div className="relative">
      <Image src={heroImg} alt="" className="w-full" />
      <div className="text-white bg-[#1E3A52] lg:bg-transparent px-5 py-5 lg:py-0 lg:p-0 lg:absolute lg:top-[35%] lg:left-[6.5%]">
        <h1 className="lg:text-[60px] text-2xl font-extrabold  leading-tight">
          Audit & Assurance
        </h1>
        <p className="pt-2 lg:text-xl lg:w-11/12">
          The compliance service ensures that a business adheres to external
          rules and internal controls.
        </p>
      </div>
    </div>
  );
};

export default ITGeneralControlHero;
