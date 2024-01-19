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
      "Most organizations need an ISO, but maybe not full-time. Or with ISOs in such high demand and with salaries on the rise, can't afford a full-time resource. This can leave an organization in a conundrum, because cyberattacks stop at nothing and no industry is immune. So, what to do?",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "We provide organizations with a Virtual ISO (vISO) who serves as an extension of your team and is responsible for making recommendations for the development, implementation, and management of your organization's corporate security vision. Your vISO is retained on a contractual basis and facilitates conversations that lead to executive critical decision-making related to information security issues. Our Tactical & Strategic vISO Programs include organizational oversight, mitigation tracking, resource assignments and risk assessments, audit preparation utilizing our GRC Platform.",
  },
];

const VINFO_FEATURES_DATA = [
  "Improve your Information Security Program",
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
          Information Security Officers (ISO) are stretched thin due to limited
          resources and tight cybersecurity budgets. The need for an ISO is
          critical but can be minimized due to budget constraints. When a crisis
          hits, valuable response time can be wasted figuring out how to respond
          leaving your organization at risk. You need a trained expert around
          full-time
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
