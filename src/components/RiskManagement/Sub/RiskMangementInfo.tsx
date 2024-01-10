import Image from "next/image";
import React from "react";
import infoImg1 from "../../../../public/services-solutions/Enterprise-Risk-Management-info-img.png";

const RiskMangementInfo = () => {
  return (
    <div className="p-5 lg:px-20">
      <div className="py-5 lg:py-10 flex flex-col lg:flex-row justify-between gap-5">
        <div className="flex flex-col justify-between w-full">
          <h1 className="lg:text-2xl text-gray-900 font-semibold">
            What is Enterprise Risk Management?
          </h1>
          <p className="text-gray-900 text-sm lg:text-base py-1">
            Enterprise Risk Management (ERM) is the ongoing process of applied
            strategies across the whole company in order to manage risks and
            grasp opportunities related to the success of the
            organization&apos;s goals. ERM can assist with risk management to
            assess the bad actors, map out the impact they could have on the
            organization and help with a response and monitoring strategy to
            avoid these attacks.
          </p>
        </div>
        <Image src={infoImg1} alt="" className="w-full rounded-lg" />
      </div>
    </div>
  );
};

export default RiskMangementInfo;
