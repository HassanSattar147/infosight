import React from "react";
import energyImg from "../../../../public/industries/industries-energy-img.png";
import { Features } from "@/components/Elements/ServicePageLayout";
import IndustryCard from "./IndustryCard";
import ContentContainer from "@/components/Elements/ContentContainer";

const ENERGY_FEATURES_DATA = [
  "SCADA & ICS Vulnerability Asessments",
  "Disaster Recovery Planning",
  "Social Engineering",
  "Security Compliances, Policy & Procedure Updates",
  "Industrial Control & IoT Services Security Compliances",
  "Risk Management",
  "24x7x365 Managed Security Services & SEIM",
  "Employee Security Awareness Training",
];

const description = `Our experience within the Electrical Energy Industry allows us to understand critical infrastructure and its regulatory requirements. Whether you're a Coop, G&T or Regional Electric Energy Provider we have the knowledge to assist with Cybersecurity, Risk Management and Managed Services Solutions. We provide solutions for both your OT & IT networks with the goal of making them Cyber Resilient to attacks from bad actors.`;

const EnergyElectric = () => {
  return (
    <>
      <ContentContainer>
        <h3 className="py-5 text-2xl lg:text-4xl font-semibold">
          We have Electrified Solutions!
        </h3>
      </ContentContainer>
      <IndustryCard img={energyImg} description={description} />
      <Features data={ENERGY_FEATURES_DATA} title="We Provide" />
    </>
  );
};

export default EnergyElectric;
