"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Managed-XDR-img.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const MANAGED_XDR_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Having many different types of devices and data sources to monitor can put your organization at higher risk for a security incident. It can be overwhelming to monitor, analyze and respond to thousands of alerts each day. The threat analysis is a full-time job within itself and InfoSight wants to make it easier on you.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight's Managed XDR services, er take your data sources where our experts to monitor them from a “single pane of glass” 24x7x365. Additionally, Security Orchestration and Automation (SOAR) helps automate and speed up incident response and recovery in the instance of a breach. When data sources are normalized and no threats are apparent, our SOC analyst conduct threat hunting exercises to proactive look for threats.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      " You can be at ease 24x7x365 that InfoSight&apos;s Managed XDR services are at work even when you're not! Our Managed XDR can make response times quicker, smarter, more efficient, and more cost effective. Leveraging our XDR resources will allow you to experience better cybersecurity and act quickly on any threats that come your way!",
  },
];

const MANAGED_XDR_FEATURES_DATA = [
  "24x7 Threat Monitoring",
  "Cyber Incident Response",
  "Threat Intelligence",
  "Behavior Monitoring",
  "Policy Creation & Management",
  "Full scope services on any type of software, firewall or device",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Managed XDR | Infosight"
      heroImg={heroImg}
      heroTitle={"Managed Extended Detection & Response (XDR)"}
      path={`Home / Services & Solutions / Managed Services / Managed XDR`}
      overviewDescription={
        <>
          <p className="text-[#444444]">
            InfoSight&apos;s Managed Extended Detection & Response (XDR)
            Services can detect and respond to incidents 24x7x365 regardless of
            the source. Most organizations find it difficult to find the right
            staff to monitor and manage their own detection and response systems
            24x7x365. InfoSight&apos;s XDR services consolidates your
            on-premise, hybrid and/or Cloud environments into one cohesive
            overview to monitor and manage vulnerabilities.
            <br />
            <br />
            Securing information assets and sensitive data is a complex task
            that can only be achieved by understanding the threat environment
            and employing the right technologies, processes, training and
            people.
            <br />
            <br />
            <span className="font-semibold">That&apos;s where WE come in!</span>
          </p>
        </>
      }
      downloadLink="https://www.infosightinc.com/pdf/InfoSight-Managed-Extended-Detection-Response.pdf"
      data={MANAGED_XDR_DATA}
      dataLabel={"MANAGED_XDR_DATA"}
      featuresData={MANAGED_XDR_FEATURES_DATA}
      featureTitle={"Key Features"}
    />
  );
};

export default page;
