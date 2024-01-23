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

const description = `We understand Government agencies are targeted by bad actors every day, so when you deliver public services 24x7 defending systems can be challenging. We know limited budgets and complex purchasing processes can create a lead time to implementation adds to the challenge. At InfoSight we provide Cybersecurity and Risk Management solutions that are enterprise-class for both IT and OT networks. Additionally, we are listed on many contract vehicles and partnerships to make your purchase go smoothly.
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
