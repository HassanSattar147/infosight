import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const HIPAA_FEATURES_DATA = [
  "Risk Analysis and Management (administrative, physical, technical & organizational)",
  "Security and privacy training",
  "Storage of ePHI on portable devices and media",
  "Off-site access and use of ePHI from remote locations",
  "Disposal of equipment containing ePHI",
  " Business associates and contracts",
  "Data encryption",
  "Virus protection",
  "Technical safeguards in place to protect ePHI",
  "Network vulnerability scan",
  "Policies, procedures and practices regarding security, privacy and information technology",
];

const HIPAAFeatures = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          What We Offer
        </h1>
        <div className="grid lg:grid-cols-4 gap-5 py-5 lg:py-10">
          {HIPAA_FEATURES_DATA.map((el, i) => {
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

export default HIPAAFeatures;
