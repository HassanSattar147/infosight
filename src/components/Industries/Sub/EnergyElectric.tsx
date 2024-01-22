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

const description = `With cyber attacks on the rise, energy providers and electric cooperatives need to have layered security controls in place to defend against or identify an attack in seconds. It is imperative for those with BES (Bulk Electric Systems) and ICS (Information Control Systems) to have the most current patches applied and monitored 24x7x365. No organization is immune to cyber attacks, but a proactive strategy can make your OT & IT networks more “cyber-resilient” to attacks and bad actors.`;

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
