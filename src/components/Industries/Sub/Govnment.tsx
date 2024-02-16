import React from "react";
import buildingImg from "../../../../public/industries/industries-government-img.png";
import { Features } from "@/components/Elements/ServicePageLayout";
import IndustryCard from "./IndustryCard";
import ContentContainer from "@/components/Elements/ContentContainer";

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
];

const description = `We understand Government agencies deliver public services 24x7, and defending against bad actors every day can be a big challenge. We also recognize that limited budgets and complex purchasing processes can create long lead times to implementation that adds to the challenge. At InfoSight we provide Cybersecurity and Risk Management solutions that are enterprise-class for both IT and OT networks. 

`;

const Government = () => {
  return (
    <>
      <ContentContainer>
        <h3 className="py-5 text-2xl lg:text-4xl font-semibold">
          Cybersecurity for Government & Law Enforcement!
        </h3>
      </ContentContainer>
      <IndustryCard img={buildingImg} description={description} />
      <Features title="We Provide" data={GOVERNMENT_FEATURES_DATA} />
    </>
  );
};

export default Government;
