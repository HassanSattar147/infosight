import React from "react";
import buildingImg from "../../../../public/industries/industries-government-img.png";
import { Features } from "@/components/Elements/ServicePageLayout";
import IndustryCard from "./IndustryCard";

const GOVERNMENT_FEATURES_DATA = [
  "SIEM Solutions",
  "Penetration Testing",
  "cybersecurity Awareness Training",
  "IT Audits",
  "Cyber Risk Assessments",
  "Data Loss Prevention",
  "Regulatory Compliance Reviews",
  "24x7x365 Managed Security and Monitoring",
  "Cloud Migration and Management",
  "The My Florida Marketplace",
  "The Florida Bid System",
  "WebProcure",
  "WEBS/ WSCA",
  "TIPS",
  "USAC",
  "SCEIS",
  "AEPA",
];

const description = `InfoSight understands that Government agencies are increasingly targeted every day, and that cybersecurity is one of the biggest challenges Government agencies seem to face.`;

const Government = () => {
  return (
    <>
      <IndustryCard img={buildingImg} description={description} />
      <Features
        title="For Government Agencies We Provide"
        data={GOVERNMENT_FEATURES_DATA}
      />
    </>
  );
};

export default Government;
