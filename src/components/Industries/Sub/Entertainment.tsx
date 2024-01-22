import React from "react";
import energyImg from "../../../../public/industries/industries-entertainment-img.png";
import { Features } from "@/components/Elements/ServicePageLayout";
import IndustryCard from "./IndustryCard";
import ContentContainer from "@/components/Elements/ContentContainer";

const ENTERTAINMENT_FEATURES_DATA = [
  "SCADA & ICS Vulnerability Asessments",
  "Disaster Recovery Planning",
  "Social Engineering",
  "Security Compliances, Policy & Procedure Updates",
  "Industrial Control & IoT Services Security Compliances",
  "Risk Management",
  "24x7x365 Managed Security Services & SEIM",
  "Employee Security Awareness Training",
];

const description = `High-profile cyber attacks on the entertainment industry have led to some very public and embarrassing data exposure. Entertainment-related organizations need to ensure they have the security controls, solutions, and monitoring in place to prevent and detect cyber attacks. It is also of paramount importance that employees understand how to spot social engineering campaigns designed to compromise network credentials and gain unauthorized access. So having a security awareness training program is key to success. No organization is immune to cyber attacks, but a proactive, all-encompassing strategy can mitigate these cyber attacks, breaches and threats. InfoSight's Vulnerability Assessment and 24x7x365 threat monitoring can reduce the risk of a successful cyber attack. We can assist your organization by creating the most effective incident response and recovery plans for your environment. InfoSight's security strategies and services can reduce the risk of compromised data from your information control systems. We provide your team with the most efficient incident response and recovery preparation and planning possible helping owners defend their critical infrastructures from emerging cyber threats.`;

const Entertainment = () => {
  return (
    <>
      <ContentContainer>
        <h3 className="py-5 text-2xl lg:text-4xl font-semibold">
          Entertainment doesn&apos;t need to be a Cyber drama…
        </h3>
      </ContentContainer>
      <IndustryCard img={energyImg} description={description} />
      <Features data={ENTERTAINMENT_FEATURES_DATA} title="We Provide" />
    </>
  );
};

export default Entertainment;
