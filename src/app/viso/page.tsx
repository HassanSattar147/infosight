"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Vulnerability-&-CybersSecurity-Assessments.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const VIRTUAL_INFO_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Most organizations face budget constraints and/or their corporate structure doesn't support adding a full-time senior executive for information and cyber security management. This leaves many organizations at risk. Cyberattacks stop at nothing and no industry is immune.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "We provide your organization with a Virtual ISO who serves as an extension of your business and is responsible for making recommendations for the development, implementation and management of your organization's corporate security vision, strategy, and programs. Your appointed VISO is retained on a contractual basis and facilitates conversations that lead to executive critical decision-making related to information security issues. Our Tactical VISO Program offers an ISO in an advisory roe to review organizational security policies, processes and reporting. Whereas our Strategic VISO Program combines our Tactical VISO Program with added organizational oversight, mitigation activity tracking, resource assignments and risk assessment preparation utilizing our GRC (Governance, Risk & Compliance) Platform.",
  },
];

const VINFO_FEATURES_DATA = [
  "Reduce Costs by Maximizing IT Budget & Strategic Planning",
  "Provide Independent Oversight of IT Security Controls",
  "Perform Annual IT Security Risk Assessments",
  "Leverage the Most Current Threat Mitigation Strategies",
  "Assist in Security Process Development & Incident Response Planning",
  "Provide Recommendations & Reporting",
  "Enhance & Integrate IT/InfoSec Policies & Procedures",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Virtual ISO | InfoSight"
      heroImg={heroImg}
      heroTitle={"Virtual Information Security Officer (VISO)"}
      path={`Home / Services & Solutions / Advisory Services / Security / Virtual
      Information Security Officer (VISO)`}
      overviewDescription={
        <p className="lg:w-11/12 text-[#444444]">
          Today, Information Security Officer (ISO) resources are stretched thin
          due to limited staff and tight cybersecurity budgets. The need for an
          ISO is critical but can be overlooked because of budget constraints.
          When a crisis hits, valuable response times can be wasted figuring out
          how to respond leaving your organization at risk of breached, data
          stolen or worse held for ransom. You need a trained expert around
          full-time.
        </p>
      }
      downloadLink={`https://www.infosightinc.com/pdf/InfoSight-VISO-2.pdf`}
      videoLink="https://www.infosightinc.com/Videos/InfoSight-VISO.mp4"
      data={VIRTUAL_INFO_DATA}
      dataLabel={"VIRTUAL_INFO_DATA"}
      featuresData={VINFO_FEATURES_DATA}
      featureTitle={"Key Benefits"}
    />
  );
};

export default page;
