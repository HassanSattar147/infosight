"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
// import heroImg from "/public/services-solutions/Enterprise-Risk-Management-img.png";
import heroImg from "/public/testing-images-2/risk-assessments-banner.jpg";

const RISK_MANAGEMENT_DATA = [
  {
    title: "The Challenge",
    description:
      "There are many challenges to ERM in today's connected world. The business landscape evolves quickly. New risks emerge, while existing risks may change in nature or intensity. ERM processes must adapt to keep pace. Cybersecurity risks are increasingly prominent and constantly evolving. ERM must address these threats effectively, which requires specialized knowledge and resources. Global supply chains are vulnerable to disruptions, such as natural disasters, geopolitical events, or vendor issues. Identifying and mitigating these risks can be challenging. Additionally, complying with evolving regulations and compliance standards adds complexity to ERM efforts. Different regions and industries may have distinct regulatory requirements.",
  },
  {
    title: "How We Solve it",
    description:
      "Solving the challenges of Enterprise Risk Management (ERM) requires a strategic and proactive approach. Through our ERM planning methodology  we address the challenges strategically and systematically, and help organizations build resilience, enhance risk management practices, and better navigate a complex and dynamic business environment.",
  },
  {
    title: "The Outcome",
    description:
      "The outcome is an ERM framework that creates a risk-aware culture, where investments in data analytics and technology, as well as engagement with senior leadership play key roles. Our goal is to deliver an ERM plan whereby organizations can continuously update and adapt their ERM strategies to address emerging risks effectively. We help organizations develop a collaboration among different departments and a proactive approach to risk management which is also key to success.",
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
      heroTitle={"Enterprise Risk Management"}
      path={`Home / Services & Solutions / Advisory Services / Risk Management /
      Enterprise Risk Management`}
      overviewDescription={
        <p>
          InfoSight takes a holistic approach to Enterprise Risk Management
          (ERM) by developing strategies to mitigate risks at an enterprise
          level across the entire organization. InfoSight&apos;s experts work
          with you and your risk management team leveraging a risk-based
          approach to help you make well-informed risk management decisions that
          align with your business operations. This approach assists in
          justifying investments in the risk management process.
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
