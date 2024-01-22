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

const description = `With cyber attacks on the rise, oil & gas companies need to have layered security controls in place to defend against or identify an attack in seconds. It is imperative for those with BES (Bulk Electric Systems) and ICS (Information Control Systems) to have the most current patches applied and monitored 24x7x365. No organization is immune to cyber attacks, but a proactive strategy can make your OT & IT networks more “cyber-resilient” to attacks and bad actors. In the oil and gas industry, attacks leading to Industrial Control Systems failure can be catastrophic on multiple levels.  InfoSight's Vulnerability Assessment and 24x7x365 threat monitoring can reduce the risk of a successful cyber attack. We can assist your organization by creating the most effective incident response and recover plans for your environment.`;

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
