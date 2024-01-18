"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Managed-XDR-img.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";

const MUCCCS_DATA = [
  {
    img: infoImg1,
    title:
      "Why are InfoSight's Unified Communications, Collaboration & Connect Services Important?",
    description:
      "InfoSight's Managed Unified Communications, Collaboration & Connect Support Services can provide the appropriate skillsets to achieve the ideal level of UCC acumen required for your specific environment. We employ a personalized approach to design the ideal Managed Unified Communications, Collaboration & Connect Services program for your business to achieve the best possible outcome.",
  },
];

const MUCCCS_FEATURES_DATA = [
  "24x7x365 UCC infrastructure monitoring covering IP Telephony, Messaging, Multi-media Video Conferencing, and Contact Center that leverages Artificial Intelligence (AI).",
  "On-demand implementation of new technologies to remain agile",
  "Support for multi-vendor connectivity platforms, SOHO integration, and business analytics and reporting",
  "Multi-vendor case management",
  "AWS Connect, AWS Chime, AWS Workspaces",
  "Technical Human Capital with multi-vendor experience to satisfy any level of network operations and management complexity",
  "A flexible support and services model to complement any size in-house IT team",
  "Run/Playbook creation and maintenance",
  "Shoretel/Mitel, Cisco",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Managed Communications | infoSight"
      heroImg={heroImg}
      heroTitle={"Managed Extended Detection & Response (XDR)"}
      path={`Home / Services & Solutions / Managed Services / Managed Unified
      Communications, Collaboration & Connect Services`}
      overviewDescription={
        <>
          <p className="text-[#444444]">
            Today more than ever, workforces need to be agile enough to work
            from anywhere and still maintain the same level of operational
            efficiency and creativity. Unified communications and collaboration
            (UCC) facilitates the convergence of disparate voice, video, contact
            center, and collaboration service networks creating a virtual
            workforce. However, UCC technological complexities can be a drain on
            internal resources, which can be overrun with the sheer volume of
            operational support requirements. This ever-evolving virtual
            workforce initiative can be very difficult for many IT teams to
            deploy and manage.
          </p>
        </>
      }
      data={MUCCCS_DATA}
      dataLabel={"MUCCCS_DATA"}
      featuresData={MUCCCS_FEATURES_DATA}
      featureTitle={"Key Features"}
    />
  );
};

export default page;
