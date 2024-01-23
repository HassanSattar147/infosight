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

const description = `High-profile cyber attacks on the entertainment industry have led to some very public and embarrassing data exposure. Entertainment-related organizations need to ensure they have the security controls and monitoring in place to detect and prevent cyber attacks. It's also of paramount importance that employees understand how to spot social engineering campaigns designed to compromise network credentials and gain unauthorized access. The fact is, no organization is immune to cyberattack, but a proactive all-encompassing strategy can mitigate these cyber attacks before they impact the bottom line. InfoSight's Cybersecurity Assessments and 24x7 Threat Monitoring can reduce the risk of a successful cyberattack. Let us show how to reduce your attack surface today!
`;

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
