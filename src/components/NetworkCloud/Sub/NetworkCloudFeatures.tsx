import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const NETWORK_CLOUD_FEATURES_DATA_1 = [
  "Monitoring for both on-premise and cloud estates to include all LAN/WAN devices",
  "On-demand implementation of new technologies to remain agile",
  "Tooling to obtain granular levels of visibility into your network and cloud environments",
  "Run/Playbook creation and maintenance",
  "Technical Human Capital with multi-vendor experience",
  "Multi-vendor case management",
  "A flexible support services model to compliment any size in-house IT Team",
];

const NETWORK_CLOUD_FEATURES_DATA_2 = [
  "Health & Performance Monitoring",
  "Vulnerability & Patch Management",
  "AD Management & Monitoring",
  "NIDS/HIDS",
  "Hosted SIEM",
  "Endpoint Security",
  "SOC Threat Detection & Incident Response",
];
const NetworkCloudFeatures = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          Key Features
        </h1>
        <div className="grid lg:grid-cols-4 gap-5 py-5 lg:py-10">
          {NETWORK_CLOUD_FEATURES_DATA_1.map((el, i) => {
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
        <h1 className="text-white text-2xl lg:text-4xl font-semibold py-5">
          Other Features
        </h1>
        <div className="grid lg:grid-cols-4 gap-5 py-5 lg:py-10">
          {NETWORK_CLOUD_FEATURES_DATA_2.map((el, i) => {
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

export default NetworkCloudFeatures;
