import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const ITAUDIT_FEATURES_DATA = [
  "IT Audit Testing",
  "IT Audit Support",
  "IT Audit Deficiency Remediation",
  "IT Audit Program Design & Review",
  "IT Audit Training",
  "Audit Automation Software Implementation & Configuration",
  "Compliance Standards based on Industry",
];

const ITAuditFeatures = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          InfoSight&apos;s IT Audit Service Offers
        </h1>
        <div className="grid lg:grid-cols-4 gap-5 py-5 lg:py-10">
          {ITAUDIT_FEATURES_DATA.map((el, i) => {
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

export default ITAuditFeatures;
