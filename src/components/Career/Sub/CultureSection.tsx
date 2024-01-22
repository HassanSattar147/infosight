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
          We encourage our team members to achieve their professional career
          goals though an unparalleled training and certification continuum.
          InfoSight's training continuum is the most complete in our industry,
          leading to the most skilled technical specialists. Our focus on
          regulated industries and organizations with sensitive data to protect,
          enables employees to learn cybersecurity and technology skills that
          will benefit them for a lifetime.
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
