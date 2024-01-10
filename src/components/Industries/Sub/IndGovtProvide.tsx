import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const GOVERNMENT_FEATURES_DATA = [
  "SIEM Solutions",
  "Penetration Testing",
  "cybersecurity Awareness Training",
  "IT Audits",
  "Cyber Risk Assessments",
  "Data Loss Prevention",
  "Regulatory Compliance Reviews",
  "24x7x365 Managed Security and Monitoring",
  "Cloud Migration and Management",
  "The My Florida Marketplace",
  "The Florida Bid System",
  "WebProcure",
  "WEBS/ WSCA",
  "TIPS",
  "USAC",
  "SCEIS",
  "AEPA",
];

const IndGovtProvide = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          For Government Agencies We Provide
        </h1>
        <p className="text-white lg:text-lg py-5 font-semibold">
          We are here to protect sensitive data from malware and provide you
          with services such as
        </p>
        <div className="grid lg:grid-cols-4 gap-5 py-5 lg:py-10">
          {GOVERNMENT_FEATURES_DATA.map((el, i) => {
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
        <p className="text-white lg:text-lg py-5 font-semibold">
          Our highly educated and trained staff are registered on a number of
          governments purchasing vehicles such as
        </p>
        <div className="grid lg:grid-cols-4 gap-5 py-5 lg:py-10">
          {GOVERNMENT_FEATURES_DATA.map((el, i) => {
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

export default IndGovtProvide;
