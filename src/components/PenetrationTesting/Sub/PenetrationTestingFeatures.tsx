import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const PENETRATION_FEATURES_DATA = [
  "Evaluate environments for real-world readiness",
  "Reduce the risk of a successful attack before it occurs",
  "Identify security issues beyond the capability of automated tools & assessments",
  "Exit interviews to provide both executive level and detailed reports",
  "Reduce the risk of a successful attack before it occurs",
  "Goes beyond typical penetration testing to involve mission-oriented Red Teaming operations",
  "Prioritize your risks and quickly take the right preventative measures",
  "Vulnerability Management",
];

const PenetrationTestingFeatures = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          Key Benefits
        </h1>
        <div className="grid lg:grid-cols-3 gap-5 py-5 lg:py-10">
          {PENETRATION_FEATURES_DATA.map((el, i) => {
            return (
              <div
                key={i}
                className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md"
              >
                <Image src={tickImg} alt=""  />
                <p className="text-white font-semibold">{el}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PenetrationTestingFeatures;
