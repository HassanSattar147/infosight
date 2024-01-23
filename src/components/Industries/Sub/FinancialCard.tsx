import React from "react";
import financialImg from "../../../../public/industries/industries-financial-img.png";
import { Features } from "@/components/Elements/ServicePageLayout";
import IndustryCard from "./IndustryCard";
import ContentContainer from "@/components/Elements/ContentContainer";

const FINANCIAL_FEATURES_DATA = [
  "SCADA & ICS Vulnerability Asessments",
  "Disaster Recovery Planning",
  "Social Engineering",
  "Security Compliances, Policy & Procedure Updates",
  "Industrial Control & IoT Services Security Compliances",
  "Risk Management",
  "24x7x365 Managed Security Services & SEIM",
  "Employee Security Awareness Training",
];

const desctiption = `Financial Institutions are the Core of InfoSight's solutions. We come from the financial core processing industry so we understanding your operating environment. Whether you're in-house or outsource, the platforms that run your operation are well known by our team. We provide Technology, Cybersecurity, Risk Management, Compliance and Online Banking Customer Security Awareness Training solutions for institutions of all sizes. 
`;

const FinancialCard = () => {
  return (
    <>
      <ContentContainer>
        <h3 className="py-5 text-2xl lg:text-4xl font-semibold">
          We know Financial!
        </h3>
      </ContentContainer>
      <IndustryCard img={financialImg} description={desctiption} />
      <Features data={FINANCIAL_FEATURES_DATA} title="We Provide" />
    </>
  );
};

export default FinancialCard;
