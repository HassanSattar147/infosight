import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const MUCCCS_FEATURES_DATA = [
  "24x7x365 UCC infrastructure monitoring covering IP Telephony, Messaging, Multi-media Video Conferencing, and Contact Center that leverages Artificial Intelligence (AI).",
  "On-demand implementation of new technologies to remain agile",
  "Support for multi-vendor connectivity platforms, SOHO integration, and business analytics and reporting",
  "Multi-vendor case management",
  "AWS Connect, AWS Chime, AWS Workspaces",
  "Technical Human Capital with multi-vendor experience to satisfy any level of network operations and management complexity",
  "A flexible support and services model to complement any size in-house IT team",
  "Run/Playbook creation and maintenance",
  "Shoretel/Mitel, Cisco",
];

const MUCCCSFeatuers = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          Key Features
        </h1>
        <div className="grid lg:grid-cols-3 gap-5 py-5 lg:py-10">
          {MUCCCS_FEATURES_DATA.map((el, i) => {
            return (
              <div
                key={i}
                className="flex items-center bg-[#1E3A52] gap-5 lg:h-[150px] p-6 rounded-md"
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

export default MUCCCSFeatuers;
