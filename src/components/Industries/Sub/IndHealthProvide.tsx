import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const HEALTH_FEATURES_DATA = [
  "Proactive HIPAA compliant IT services networks",
  "Multi-layered HIPAA compliant cybersecurity framework",
  "Ensure customers follow HITECH regulatory standards",
  "Provide support on various EHR systems",
  "Perform HIPAA Risk & Security Assessments",
  "Cloud Solutions & Office 365",
  "24x7x365 Network & Security Monitoring",
];

const IndHealthProvide = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          For Healthcare Industry We Provide
        </h1>
        <div className="grid lg:grid-cols-4 gap-5 py-5 lg:py-10">
          {HEALTH_FEATURES_DATA.map((el, i) => {
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

export default IndHealthProvide;
