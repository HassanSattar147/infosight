import Image from "next/image";
import React from "react";
import heroImg from "../../../../public/services-solutions/SECaaS-img.png";

const SecurityServiceHero = () => {
  return (
    <div className="relative">
      <Image src={heroImg} alt="" className="w-full" />
      <div className="text-white bg-[#1E3A52] lg:bg-transparent px-5 py-5 lg:py-0 lg:p-0 lg:absolute lg:top-[35%] lg:left-[6.5%]">
        <h1 className="lg:text-[60px] text-2xl font-extrabold lg:w-full leading-tight">
          Security as a Service <br /> (SECaaS)
        </h1>
      </div>
    </div>
  );
};

export default SecurityServiceHero;
