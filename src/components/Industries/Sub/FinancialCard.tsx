import React from "react";
import financialImg from "../../../../public/industries/industries-financial-img.png";
import { Features } from "@/components/Elements/ServicePageLayout";
import IndustryCard from "./IndustryCard";

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

const desctiption = `InfoSight provides solutions for financial industries to improve overall compliance, security and financial infrastructure. InfoSight provides 24x7x365 Managed Security and Advisory Services that test and monitor your network's infrastructure; keeping you secure from any breaches that could occur.`;

const FinancialCard = () => {
  return (
    <>
      <IndustryCard img={financialImg} description={desctiption} />
      <Features
        data={FINANCIAL_FEATURES_DATA}
        title="For Financial Industry We Provide"
      />
    </>
  );
};

export default FinancialCard;
