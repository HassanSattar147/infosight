import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const PCI_FEATURES_DATA = [
  "Penetration Testing",
  "Remediation Assistance",
  "PCI DSS GAP Analysis",
  "Readiness Assessments",
  "Security Awareness Training",
  "Security Network & Segmentation Design",
  "Self-Assessment Questionnaire Assistance",
];

const PCIFeatures = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          Key Features
        </h1>
        <p className=" text-white py-2 text-lg">
          We simplify PCI DSS compliance and security with flexible options that
          meet your specific needs and protect your business.
        </p>
        <div className="grid lg:grid-cols-4 gap-5 py-5 lg:py-10">
          {PCI_FEATURES_DATA.map((el, i) => {
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
        <p className=" text-white py-5 text-lg">
          InfoSight provides a variety of tools, guidance, training resources
          and other IT security services to assist organizations seeking to
          achieve PCI compliance. We can help you build and maintain a high
          security posture, help you understand what is involved in PCI DSS
          compliance, and assist in developing policies and practices that best
          fit your needs.
        </p>
      </div>
    </div>
  );
};

export default PCIFeatures;
