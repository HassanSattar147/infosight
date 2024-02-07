"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Managed-Network-Cloud-Support-Services-img.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const NETWORK_CLOUD_DATA = [
  {
    // img: infoImg1,
    useType2: true,
    title: "The Challenge",
    description:
      "Hybrid networks require an upfront assessment of the operational costs, security, disaster recovery and access management before a migration to a full cloud environment is possible. It also requires having an IT team with the right skillset and experience with cloud workloads. Additionally, there are also the financial implications of moving to a consumption or subscription-based cost model where costs can rise quickly if you're not careful.",
  },
  {
    // img: infoImg2,
    useType2: true,
    title: "How We Solve It",
    description:
      "We possess the varied and wide skillset needed to design, build, and manage cloud environments.  Designing a hybrid network, or a full cloud environment that encompasses data, video and voice are core competencies. We begin with a needs analysis and risk assessment for a full or partial cloud migration, then we provide a budgetary estimate of the costs associated.  After the design and budget are approved, we can move forward with the implementation support plan.",
  },
  {
    // img: infoImg3,
    useType2: true,
    title: "Just the Facts",
    description: (
      <>
        <div className="px-2 flex">
          <span className="pr-2 text-xl font-bold">&#128504;</span>
          <span className="font-semibold">24x7x365 Staffed SOC</span>
        </div>
        <div className="px-2 flex">
          <span className="pr-2 text-xl font-bold">&#128504;</span>
          <span className="font-semibold">
            100% US based SOC 2 Certified Operations Center
          </span>
        </div>
        <div className="px-2 flex">
          <span className="pr-2 text-xl font-bold">&#128504;</span>
          <span className="font-semibold">Only US-based W2 employees</span>
        </div>
        <div className="px-2 flex">
          <span className="pr-2 text-xl font-bold">&#128504;</span>
          <span className="font-semibold">
            Providing both Security and Network Infrastructure Support
          </span>
        </div>
        <div className="px-2 flex">
          <span className="pr-2 text-xl font-bold">&#128504;</span>
          <span className="font-semibold">
            Support for Cloud, Datacenter or Hybrid networks
          </span>
        </div>
        <div className="px-2 flex">
          <span className="pr-2 text-xl font-bold">&#128504;</span>
          <span className="font-semibold">
            Monitoring of Applications, DBs, Security, Infrastructure, Server or
            Serverless
          </span>
        </div>
        <div className="px-2 flex">
          <span className="pr-2 text-xl font-bold">&#128504;</span>
          <span className="font-semibold">
            Offering Device-based or consumption-based pricing models
          </span>
        </div>
        <div className="px-2 flex">
          <span className="pr-2 text-xl font-bold">&#128504;</span>
          <span className="font-semibold">
            24x7 or off-peak 7pm-7am coverage available
          </span>
        </div>
        <div className="px-2 flex">
          <span className="pr-2 text-xl font-bold">&#128504;</span>
          <span className="font-semibold">
            Cyber liability insurance coverage
          </span>
        </div>
        <div className="px-2 flex">
          <span className="pr-2 text-xl font-bold">&#128504;</span>
          <span className="font-semibold">
            Federally regulated and critical infrastructure client experience
          </span>
        </div>
        <div className="px-2 flex">
          <span className="pr-2 text-xl font-bold">&#128504;</span>
          <span className="font-semibold">
            24+ years of successful outcomes
          </span>
        </div>
      </>
    ),
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
            Today&apos;s networks are hybrid environments that combine a mix of
            traditional data centers and cloud estates. Additionally, most
            environments are a heterogenous mix of many different vendor
            technology solutions with no single management platform.
          </p>
        </>
      }
      downloadLink="/pdfs/InfoSight Managed-Extended-Detection-Response-XDR.pdf"
      data={NETWORK_CLOUD_DATA}
      dataLabel={"NETWORK_CLOUD_DATA"}
      featuresData={NETWORK_CLOUD_FEATURES_DATA_2}
      featureTitle="Other Managed Services"
    />
  );
};

export default page;
