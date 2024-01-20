import React from "react";
import healthImg from "../../../../public/industries/industries-healthcare-img.png";
import { Features } from "@/components/Elements/ServicePageLayout";
import IndustryCard from "./IndustryCard";

const HEALTH_FEATURES_DATA = [
  "Proactive HIPAA compliant IT services networks",
  "Multi-layered HIPAA compliant cybersecurity framework",
  "Ensure customers follow HITECH regulatory standards",
  "Provide support on various EHR systems",
  "Perform HIPAA Risk & Security Assessments",
  "Cloud Solutions & Office 365",
  "24x7x365 Network & Security Monitoring",
];

const description = `Cyber attackers are smarter than ever and InfoSight understands protecting patient information from data loss and theft is the crucial in the healthcare industry. Our HIPAA compliant, cybersecurity & compliance solutions optimize how your network and mobile systems perform while ensuring patient information is safe and secure from the wrong hands.`;

const Healthcare = () => {
  return (
    <>
      <IndustryCard img={healthImg} description={description} />
      <Features
        data={HEALTH_FEATURES_DATA}
        title="For Healthcare Industry We Provide"
      />
    </>
  );
};

export default Healthcare;
