"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Managed-Network-Cloud-Support-Services-img.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";

const NETWORK_CLOUD_DATA = [
  {
    img: infoImg1,
    title: "What are InfoSight's Managed Network and Cloud Support Services",
    description:
      "InfoSight's Managed Network and Support Services provide the appropriate skillsets to achieve the ideal level of network management required for your specific environment. We employ a personalized approach to design the perfect Network Management and Support program for your Business to achieve the best possible outcome.",
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
      heroTitle={"Managed Network & Cloud Support Services"}
      path={`Home / Services & Solutions / Managed Services / Managed Network & Cloud
      Support Services`}
      overviewDescription={
        <>
          <p className="text-[#444444]">
            Today&apos;s networks are mixed environments with a variety of
            traditional LAN/WAN, Wireless, data center, and cloud estates. Most
            environments are a heterogenous mix of many different vendor
            technology solutions with no single management platform. This adds
            great complexity to network management and requires a varied and
            wide skillset of IT personnel. As a result, many businesses have
            become overwhelmed with the task associated with managing and
            supporting these environments and miss both their operational and
            business objectives by not having the required resources to meet
            performance demands.
          </p>
        </>
      }
      downloadLink="https://www.infosightinc.com/pdf/InfoSight-Managed-Extended-Detection-Response.pdf"
      data={NETWORK_CLOUD_DATA}
      dataLabel={"NETWORK_CLOUD_DATA"}
      featuresData={NETWORK_CLOUD_FEATURES_DATA_1}
      featureTitle={"Key Features"}
      otherFeaturesData={NETWORK_CLOUD_FEATURES_DATA_2}
      otherFeatureTitle="Other Features"
    />
  );
};

export default page;
