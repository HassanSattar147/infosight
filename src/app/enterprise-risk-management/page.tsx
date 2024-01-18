"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Enterprise-Risk-Management-img.png";
import infoImg1 from "/public/services-solutions/Enterprise-Risk-Management-info-img.png";

const RISK_MANAGEMENT_DATA = [
  {
    img: infoImg1,
    title: "What is Enterprise Risk Management?",
    description:
      "Enterprise Risk Management (ERM) is the ongoing process of applied strategies across the whole company in order to manage risks and grasp opportunities related to the success of the organization's goals. ERM can assist with risk management to assess the bad actors, map out the impact they could have on the organization and help with a response and monitoring strategy to avoid these attacks.",
  },
];

const RISK_MANAGEMENT_FEATURES_DATA = [
  "Risk Management Framework & Program Development",
  "GLBA Risk Assessments",
  "Cyber Risk Gap Analysis",
  "eBanking Risk Assessments",
  "IT Risk Assessments",
  "BSA/AML Risk Assessments",
  "Enterprise Risk Assessments",
  "PCI Compliance Review",
  "COBIT Compliance Review",
  "SOX 404 Compliance Review",
  "GLBA 501(b) Compliance Review",
  "BSA Compliance Review",
  "HIPAA Data Security Compliance Review",
  "Business Continuity & Disaster Recovery",
  "Multi-Factor Authentication in an eBanking Environment",
  "Red Flag Identity Theft Review",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Enterprise Risk Management | InfoSight"
      heroImg={heroImg}
      heroTitle={"Leveraging Enterprise Risk Management"}
      path={`Home / Services & Solutions / Advisory Services / Risk Management /
      Enterprise Risk Management`}
      overviewDescription={
        <p>
          InfoSight takes a holistic approach to risk management by developing
          strategies to mitigate risks at an enterprise level across the entire
          organization. InfoSight&apos;s experts work with you and your risk
          management team leveraging a risk-based approach to help you make
          well-informed risk management decisions that align with your business
          operations. This approach assists in justifying investments in the
          risk management process.
        </p>
      }
      data={RISK_MANAGEMENT_DATA}
      dataLabel={"RISK_MANAGEMENT_DATA"}
      featuresData={RISK_MANAGEMENT_FEATURES_DATA}
      featureTitle={"Enterprise Risk Management Services InfoSight Provides"}
    />
  );
};

export default page;
