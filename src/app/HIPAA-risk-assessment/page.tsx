"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/compliance/compliance-hero-img.png";

const HIPPA_DATA = [
  {
    title: "The Challenge",
    description:
      "HIPAA regulations are complex and multifaceted. Navigating and interpreting the various rules and requirements can be challenging, especially for organizations without dedicated compliance expertise. The healthcare sector is also a prime target for cyberattacks, and the threat landscape is continually evolving. Assessing and addressing emerging cybersecurity threats requires constant vigilance and expertise. Additionally, many healthcare organizations or entities with limited budgets may struggle to allocate the necessary resources for a comprehensive risk assessment. This includes financial resources, skilled personnel, and specialized technology tools.",
  },
  {
    title: "How We Solve It",
    description:
      "To address these challenges, our experienced HIPAA compliance experts, show your organization how to invest in relevant technology and training, and developing a systematic approach to risk assessment and management. We'll develop a standardized risk assessment framework tailored to your organization's specific needs and resources with clearly defined scope and objectives.",
  },
  {
    title: "The Outcome",
    description:
      "Our HIPAA Risk Assessment is a clear and concise review of your HIPAA risk posture. We will quantify and categorize risk based upon federal requirements while creating a roadmap to compliance that is easy to follow and actionable.",
  },
];

const HIPPA_FEATURES_DATA = [
  "Risk Analysis and Management (administrative, physical, technical & organizational)",
  "Security and privacy training",
  "Storage of ePHI on portable devices and media",
  "Off-site access and use of ePHI from remote locations",
  "Disposal of equipment containing ePHI",
  "Business associates and contracts",
  "Data encryption",
  "Virus protection",
  "Technical safeguards in place to protect ePHI",
  "Network vulnerability scan",
  "Policies, procedures and practices regarding security, privacy and information technology",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="HIPPA Risk Assessments | InfoSight"
      heroImg={heroImg}
      heroTitle={"HIPPA Risk Assessments"}
      path={`Home / Services & Solutions / Advisory Services / Security / HIPPA Risk Assessments`}
      overviewDescription={
        <p className="text-[#444444]">
          A HIPAA (Health Insurance Portability and Accountability Act) risk
          assessment is a crucial component of compliance for healthcare
          organizations and any business that handles protected health
          information (PHI). A HIPAA risk assessment is essential because it is
          a legal requirement, helps protect sensitive health information,
          verifies compliance, strengthens legal defenses, preserves reputation,
          and ultimately contributes to the overall security and trustworthiness
          of healthcare organizations and other entities handling PHI.
        </p>
      }
      data={HIPPA_DATA}
      dataLabel={"HIPPA_DATA"}
      featuresData={HIPPA_FEATURES_DATA}
      featureTitle={"What We Offer"}
    />
  );
};

export default page;
