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
      "Many organizations have XDRs and SIEMs that are not fully implemented or optimized due to time and resource constraints. As a result, the platforms often have limited visibility and blind spots, or worse, create alert fatigue for overworked It security teams. That's where we come in!",
  },
  {
    img: infoImg2,
    title: "How We Deliver It",
    description:
      "Our SOC team can take the keys and drive for you. With or without our 24x7 SOCaaS, we can manage and maintain your XDR or SIEM platform with our US-based SOC team.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "Our Managed XDR can make response times quicker, more efficient, with less expense. Leveraging our XDR resources will allow your team to focus on what matters, supporting the day-to-day operation.",
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
      pageTitle="Managed XDR | Infosight"
      heroImg={heroImg}
      heroTitle={"Managed Extended Detection & Response (XDR)"}
      path={`Home / Services & Solutions / Managed Services / Managed XDR`}
      overviewDescription={
        <>
          <p className="text-[#444444]">
            Is your team tired of managing Azure Sentinel, Splunk, or another
            XDR or SIEM? Hand us the keys! We&apos;ll manage it and maintain it
            and deliver SOCaaS if you need it too!
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
