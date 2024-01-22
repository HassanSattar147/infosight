import React from "react";
import energyImg from "../../../../public/industries/industries-water-img.png";
import { Features } from "@/components/Elements/ServicePageLayout";
import IndustryCard from "./IndustryCard";
import ContentContainer from "@/components/Elements/ContentContainer";

const WATER_FEATURES_DATA = [
  "SCADA & ICS Vulnerability Asessments",
  "Disaster Recovery Planning",
  "Social Engineering",
  "Security Compliances, Policy & Procedure Updates",
  "Industrial Control & IoT Services Security Compliances",
  "Risk Management",
  "24x7x365 Managed Security Services & SEIM",
  "Employee Security Awareness Training",
];

const description = `With cyber attacks on the rise, water and wastewater cooperatives need to have the layered security controls in place to defend against or identify an attack in seconds. It is imperative for those ICS (Information Control Systems) to have the most current patches applied and monitored 24x7x365. No organization is immune to cyber attacks, but a proactive strategy can make your OT & IT Networks more “cyber-resilient” to attacks and bad actors. Cyber attacks leading to Industrial Control System failures can be catastrophic on multiple levels. InfoSight's Vulnerability Assessment and 24x7x365 threat monitoring can reduce the risk of a successful cyber attack. We can assist your organization by creating the most effective incident response and recovery plans for your environment. InfoSight's security strategies and services can reduce the risk of compromised data from your information control systems. We provide your team with the most efficient incident response and recovery preparation and planning possible helping owners defend their critical infrastructures from emerging cyber threats.`;

const Water = () => {
  return (
    <>
      <ContentContainer>
        <h3 className="py-5 text-2xl lg:text-4xl font-semibold">
          Our solutions flow for Water & Wastewater!
        </h3>
      </ContentContainer>
      <IndustryCard img={energyImg} description={description} />
      <Features data={WATER_FEATURES_DATA} title="We Provide" />
    </>
  );
};

export default Water;
