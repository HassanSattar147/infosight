import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const RISK_MANAGEMENT_FEATURES_DATA = [
  "Risk Management Framework & Program Development",
  "GLBA Risk Assessments",
  "Cyber Risk Gap Analysis",
  "eBanking Risk Assessments",
  "IT Risk Assessments",
  "BSA/AML Risk Assessments",
  "Enterprise Risk Assessments",
  "PCI Compliance Review",
  "COBIT Compliance Review",
  "SOX 404 Compliance Review",
  "GLBA 501(b) Compliance Review",
  "BSA Compliance Review",
  "HIPAA Data Security Compliance Review",
  "Business Continuity & Disaster Recovery",
  "Multi-Factor Authentication in an eBanking Environment",
  "Red Flag Identity Theft Review",
];

const RiskManagementFeatures = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          Enterprise Risk Management Services InfoSight Provides
        </h1>
        <div className="grid lg:grid-cols-3 gap-5 py-5 lg:py-10">
          {RISK_MANAGEMENT_FEATURES_DATA.map((el, i) => {
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

export default RiskManagementFeatures;
