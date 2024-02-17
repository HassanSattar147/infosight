"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Vulnerability-&-CybersSecurity-Assessments.png";

const INDUSTRIAL_CONTROL_DATA = [
  {
    title: "The Challenge",
    description:
      "Many organizations don't have an exact mapping or inventory of where all their ICS and SCADA assets are, and as a result are in a very vulnerable position. Securing ICS/SCADA systems and networks is a complex task that can only be achieved by understanding where assets are located, and by measuring their security posture in real-time. Additionally, compliance requirements must be met, so employing the right technologies to achieve successful outcomes is key! ",
  },
  {
    title: "How We Solve It",
    description:
      "InfoSight performs Industrial Control & OT Security Assessments that provide a complete evaluation and holistic view of your organization's security posture. Our technologies will map your entire ICS/SCADA network and perform a “critical path analysis” to uncover hidden dependencies. We will evaluate your overall OT Cyber Risk Posture by creating a digital image of your network and business processes. We will conduct a Breach Attack Simulation and help you understand Relevant Adversaries and necessary mitigations. Our Risk Reduction Planning Methodology is both Qualitive and Quantitative, and prioritizes CVEs based on the likelihood of the affected assets and will assist in cyber controls roadmap planning.",
  },
  {
    title: " The Outcome",
    description:
      "By leveraging AI toolsets, our skilled security assessment team conducts multi-disciplinary, multifaced reviews of your organization's IT and OT networks to identify vulnerabilities that could be exploited by a bad actor. Our actionable reporting, we will provide concise recommendations for dealing with cyber risks. The result is a roadmap to the best security practices today!",
  },
];

const INDUSTRIAL_CONTROL_FEATURES_DATA = [
  "Cyber Incident Response Plan Development",
  " PCI DSS Penetration Testing",
  "Web, Mobile & API Testing",
  "Regulatory Compliance",
  "Social Engineering",
  "Red Team/Blue Team",
  "Physical Security Reviews",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="ICS, SCADA & OT Vulnerability & Risk Assessments"
      heroImg={heroImg}
      heroTitle={"ICS, SCADA & OT Vulnerability & Risk Assessments"}
      path={`Home / Services & Solutions / Advisory Services / Security / ICS, SCADA & OT Vulnerability & Risk Assessments`}
      overviewDescription={
        <p className="text-justify text-[#444444] w-11/12">
          Whether its state sponsored attacks, or for-profit bad actors,
          Critical Infrastructure is under attack more than ever before. Now is
          the time to take an offensive approach to defending Industrial Control
          (ICS) and SCADA systems. Cyberattacks are continuing to increase in
          the municipal, industrial, and manufacturing sectors, often with
          dangerous consequences, so performing regular and ongoing threat
          assessments is critical.
        </p>
      }
      downloadLink="/pdfs/InfoSight SCADA-ICS Risk & Vulnerability Assessment.pdf"
      videoLink="/videos/CIARA-Industrial-Risk-Assessment.mp4"
      data={INDUSTRIAL_CONTROL_DATA}
      dataLabel={"INDUSTRIAL_CONTROL_DATA"}
      featuresData={INDUSTRIAL_CONTROL_FEATURES_DATA}
      featureTitle={"Key Services"}
    />
  );
};

export default page;
