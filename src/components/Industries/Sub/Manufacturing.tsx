import React from "react";
import energyImg from "../../../../public/industries/industries-manufacturing-img.png";
import { Features } from "@/components/Elements/ServicePageLayout";
import IndustryCard from "./IndustryCard";
import ContentContainer from "@/components/Elements/ContentContainer";

const MANUFACTURING_FEATURES_DATA = [
  "SCADA & ICS Vulnerability Asessments",
  "Disaster Recovery Planning",
  "Social Engineering",
  "Security Compliances, Policy & Procedure Updates",
  "Industrial Control & IoT Services Security Compliances",
  "Risk Management",
  "24x7x365 Managed Security Services & SEIM",
  "Employee Security Awareness Training",
];

const description = `With cyber attacks on the rise, CISOs are facing more pressure than ever to protect both IT and OT networks. Also, with added pressure to keep the line running, it is imperative for SCADA and ICS networks be resilient to cyberattack! Our solutions make organizations “Cyberresllient”, where responding to an attack is swift and collateral damage is minimal. 
`;

const Manufacturing = () => {
  return (
    <>
      <ContentContainer>
        <h3 className="py-5 text-2xl lg:text-4xl font-semibold">
          Our Manufacturing Solution lines help you run smooth!
        </h3>
      </ContentContainer>
      <IndustryCard img={energyImg} description={description} />
      <Features data={MANUFACTURING_FEATURES_DATA} title="We Provide" />
    </>
  );
};

export default Manufacturing;
