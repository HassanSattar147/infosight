import Image from "next/image";
import React from "react";
import aboutImg from "../../../../public/homepage/homepage-about-us-img.png";

const WeAre = () => {
  return (
    <div className="bg-[#3B719F] p-8 lg:p-20">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="text-white">
          <h1 className="text-2xl lg:text-4xl font-semibold">Who are we?</h1>
          <p className="text-sm lg:text-lg mt-8">
            InfoSight is an innovative cybersecurity company. Years of working
            with highly regulated customers where information security is mature
            makes InfoSight well suited to accelerate growth where commercial
            customers demand top level security.
            <br />
            <br />
            Organizations nationwide rely on InfoSight to design, protect,
            manage and advise on their network security, allowing them to
            maximize their investment in every circumstance. InfoSight provides
            the highest level of expertise, support, and customer service
            available.
          </p>
        </div>
        <Image src={aboutImg} alt=""  />
      </div>
    </div>
  );
};

export default WeAre;
