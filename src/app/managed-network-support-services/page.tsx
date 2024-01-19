"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Managed-Network-Cloud-Support-Services-img.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const NETWORK_CLOUD_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Hybrid networks require an upfront assessment of the operational costs, security, disaster recovery and access management before a migration to a full cloud environment is possible. It also requires having an IT team with the right skillset and experience with cloud workloads. Additionally, there are also the financial implications of moving to a consumption or subscription-based cost model where costs can rise quickly if you're not careful.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "We possess the varied and wide skillset needed to design, build, and manage cloud environments.  Designing a hybrid network, or a full cloud environment that encompasses data, video and voice are core competencies. We begin with a needs analysis and risk assessment for a full or partial cloud migration, then we provide a budgetary estimate of the costs associated.  After the design and budget are approved, we can move forward with the implementation support plan.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "An environment that is ideal for your organization's needs and budget where there are no surprises during the implementation nor the months to follow. We employ a personalized approach to design the perfect Network Management and Support program for your Business to achieve the best possible outcome.",
  },
];

const NETWORK_CLOUD_FEATURES_DATA_1 = [
  "Monitoring for both on-premise and cloud estates to include all LAN/WAN devices",
  "On-demand implementation of new technologies to remain agile",
  "Tooling to obtain granular levels of visibility into your network and cloud environments",
  "Run/Playbook creation and maintenance",
  "Technical Human Capital with multi-vendor experience",
  "Multi-vendor case management",
  "A flexible support services model to compliment any size in-house IT Team",
];

const NETWORK_CLOUD_FEATURES_DATA_2 = [
  "Health & Performance Monitoring",
  "Vulnerability & Patch Management",
  "AD Management & Monitoring",
  "NIDS/HIDS",
  "Hosted SIEM",
  "Endpoint Security",
  "SOC Threat Detection & Incident Response",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Managed Network & Cloud Support | InfoSight"
      heroImg={heroImg}
      heroTitle={"Managed Network & Cloud Migration Services"}
      path={`Home / Services & Solutions / Managed Services / Managed Network & Cloud
      Support Services`}
      overviewDescription={
        <>
          <p className="text-[#444444]">
            Today's networks are hybrid environments that combine a mix of
            traditional data centers and cloud estates. Additionally, most
            environments are a heterogenous mix of many different vendor
            technology solutions with no single management platform.
          </p>
        </>
      }
      downloadLink="https://www.infosightinc.com/pdf/InfoSight-Managed-Extended-Detection-Response.pdf"
      data={NETWORK_CLOUD_DATA}
      dataLabel={"NETWORK_CLOUD_DATA"}
      featuresData={NETWORK_CLOUD_FEATURES_DATA_2}
      featureTitle="Other Managed Services"
    />
  );
};

export default page;
