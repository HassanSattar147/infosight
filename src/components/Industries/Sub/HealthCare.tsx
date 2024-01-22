import React from "react";
import healthImg from "../../../../public/industries/industries-healthcare-img.png";
import { Features } from "@/components/Elements/ServicePageLayout";
import IndustryCard from "./IndustryCard";
import ContentContainer from "@/components/Elements/ContentContainer";

const HEALTH_FEATURES_DATA = [
  "Proactive HIPAA compliant IT services networks",
  "Multi-layered HIPAA compliant cybersecurity framework",
  "Ensure customers follow HITECH regulatory standards",
  "Provide support on various EHR systems",
  "Perform HIPAA Risk & Security Assessments",
  "Cloud Solutions & Office 365",
  "24x7x365 Network & Security Monitoring",
];

const description = `Attacks against the healthcare industry are at record highs with no sign of let up. Healthcare organizations must ensure they have the security controls and 24x7 monitoring in place to detect and prevent cyber attacks. It's also of paramount importance that employees understand how to spot social engineering campaigns designed to compromise network credentials and gain unauthorized access. The fact is, no organization is immune to cyberattack, but a proactive all-encompassing strategy can mitigate these cyber attacks before they impact the bottom line and violate HIPAA laws. Our HIPAA compliant cybersecurity, risk management & compliance solutions optimize how your networks perform, while ensuring patient information and care is prioritized.
`;

const Healthcare = () => {
  return (
    <>
      <ContentContainer>
        <h3 className="py-5 text-2xl lg:text-4xl font-semibold">
          Your Cybersecurity posture must be healthy!
        </h3>
      </ContentContainer>
      <IndustryCard img={healthImg} description={description} />
      <Features data={HEALTH_FEATURES_DATA} title="We Provide" />
    </>
  );
};

export default Healthcare;
