import Image from "next/image";
import React from "react";
import aboutUsImg1 from "../../../../public/aboutUs/about-us-img1.png";
import aboutUsImg2 from "../../../../public/aboutUs/about-us-img2.png";
import aboutUsImg3 from "../../../../public/aboutUs/about-us-img3.png";
import ContentContainer from "@/components/Elements/ContentContainer";

const CultureSection = () => {
  return (
    <ContentContainer>
      <div className="py-5">
        <h1 className="text-2xl lg:text-4xl font-semibold">Our Culture</h1>
        <p className="text-gray-500 py-2 text-sm lg:text-base">
          We challenge and encourage our staff to achieve their professional
          career go as well as their personal aspirations. Our staff has
          unmatched experience acquired while working in all aspects of
          security, risk management and regulatory compliance within
          organizations and with third-party vendors. InfoSight&apos;s training
          continuum is the most complete in our industry - providing the most
          skilled technical support. InfoSight has been improving security and
          network performance for federally regulated organizations since 1998.
        </p>
        <div className="flex justify-between items-center flex-col lg:flex-row gap-5 my-5">
          <Image src={aboutUsImg1} alt="" className="rounded-lg w-full" />
          <Image src={aboutUsImg2} alt="" className="rounded-lg w-full" />
          <Image src={aboutUsImg3} alt="" className="rounded-lg w-full" />
        </div>
      </div>
    </ContentContainer>
  );
};

export default CultureSection;
