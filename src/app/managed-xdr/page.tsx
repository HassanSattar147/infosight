"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Managed-XDR-img.png";

const MANAGED_XDR_DATA = [
  {
    useType2: true,
    title: "The Challenge",
    description:
      "Many organizations have XDRs and SIEMs that are not fully implemented or optimized due to time and resource constraints. As a result, the platforms often have limited visibility and blind spots, or worse, create alert fatigue for overworked IT security teams. That's where we come in!",
  },
  {
    useType2: true,
    title: "How We Deliver It",
    description:
      "Our SOC team can take the keys and drive for you. With or without our 24x7 SOCaaS, we can manage and maintain your XDR or SIEM platform with our US-based SOC team.",
  },
  {
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

const MANAGED_XDR_FEATURES_DATA = [
  "24x7 Threat Monitoring",
  "Cyber Incident Response",
  "Threat Intelligence",
  "Behavior Monitoring",
  "Run/Play book Maintenance",
  "SOCaaS",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Managed SIEM & XDR | Infosight"
      heroImg={heroImg}
      heroTitle={"Managed SIEM & XDR "}
      path={`Home / Services & Solutions / Managed Services / Managed SIEM & XDR`}
      overviewDescription={
        <>
          <p className="text-[#444444]">
            Is your team tired of managing Azure Sentinel, Splunk, or another
            XDR or SIEM? Hand us the keys! We&apos;ll manage it and maintain it
            and deliver SOCaaS if you need it too!
          </p>
        </>
      }
      downloadLink="/pdfs/InfoSight Managed-Extended-Detection-Response-XDR.pdf"
      data={MANAGED_XDR_DATA}
      dataLabel={"MANAGED_XDR_DATA"}
      featuresData={MANAGED_XDR_FEATURES_DATA}
      featureTitle={"Key Features"}
    />
  );
};

export default page;
