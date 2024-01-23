import React from "react";
import oilGasImg from "../../../../public/industries/industries-oil-gas-img.png";
import { Features } from "@/components/Elements/ServicePageLayout";
import IndustryCard from "./IndustryCard";
import ContentContainer from "@/components/Elements/ContentContainer";

const OIL_GAS_FEATURES_DATA = [
  "SCADA & ICS Vulnerability Asessments",
  "Disaster Recovery Planning",
  "Social Engineering",
  "Security Compliances, Policy & Procedure Updates",
  "Industrial Control & IoT Services Security Compliances",
  "Risk Management",
  "24x7x365 Managed Security Services & SEIM",
  "Employee Security Awareness Training",
];

const description = `We understand attacks against IT, OT and ICS/SCADA Networks are on the rise by both state-sponsored and profit-driven bad actors. So, our solutions are designed for your specified environments based upon your specific attack surface. From assessment and consulting, to 24x7 Managed Service IT & OT we have the experience-based knowledge you need to protect against cyberattack!
`;

const OilGas = () => {
  return (
    <>
      <ContentContainer>
        <h3 className="py-5 text-2xl lg:text-4xl font-semibold">
          Explore our solutions for Oil & Gas!
        </h3>
      </ContentContainer>
      <IndustryCard img={oilGasImg} description={description} />
      <Features data={OIL_GAS_FEATURES_DATA} title="We Provide" />
    </>
  );
};

export default OilGas;
