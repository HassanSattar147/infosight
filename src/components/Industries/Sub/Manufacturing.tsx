import React from "react";
import energyImg from "../../../../public/industries/industries-manufacturing-img.png";
import { Features } from "@/components/Elements/ServicePageLayout";
import IndustryCard from "./IndustryCard";

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

const description = `With cyber attacks on the rise, security officers are facing more pressure than ever to protect both IT and OT networks. It is imperative for SCADA and ICS networks to keep policies and procedures updated to secure information safety. No organization is immune to cyber attacks, but a proactive, all-encompassing strategy can mitigate these cyber attacks, breaches and threats. InfoSight's SCADA strategies and services can reduce the risk of compromised data from your information control systems. We provide your team with the most efficient incident response and recovery preparation and planning possible helping owners defend their critical infrastructures from emerging cyber threats.`;

const Manufacturing = () => {
  return (
    <>
      <IndustryCard img={energyImg} description={description} />
      <Features
        data={MANUFACTURING_FEATURES_DATA}
        title="For Manufacturing Industry We Provide"
      />
    </>
  );
};

export default Manufacturing;
