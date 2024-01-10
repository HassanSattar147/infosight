import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const CYBERSECURITYIRPM_FEATURES_DATA = [
  "Understand your system and environment",
  "Identify the response procedures the CERT will take to investigate, contain, eradicate, and recover from a variety of different incidents",
  "Develop strategic communication procedures for cyber incidents.",
  "Define response procedures and responsibilities of the utility's legal team during cyber incident investigation and response.",
];

const CybersecurityIRPMFeatures = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          Key Services
        </h1>
        <div className="grid lg:grid-cols-2 gap-5 py-5 lg:py-10">
          {CYBERSECURITYIRPM_FEATURES_DATA.map((el, i) => {
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

export default CybersecurityIRPMFeatures;
