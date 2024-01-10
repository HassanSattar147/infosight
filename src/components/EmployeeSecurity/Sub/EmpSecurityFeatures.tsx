import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const EMPLOYEE_SECURITY_FEATURES_DATA = [
  "Reduce Security Breaches",
  "Increase Knowledge Retention",
  "Close Awareness Gaps",
  "Increate Competitive Advantages",
  "Enhance Reputation",
  "Reduce Potential of Lawsuits, Fines & Mandatory Audits",
];
const EmpSecurityFeatures = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          Key Benefits
        </h1>
        <div className="grid lg:grid-cols-4 gap-5 py-5 lg:py-10">
          {EMPLOYEE_SECURITY_FEATURES_DATA.map((el, i) => {
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

export default EmpSecurityFeatures;
