"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/SECaaS-img.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const SECURITY_SERVICES_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "In today's cybersecurity environment staffing for quality experts is a constant challenge due to sheer demand. Additionally, sourcing quality tools that are implemented to full feature capacity and keeping them that way requires a large and constant effort. And it's a 24x7x365 job too! Security as a service (SECaaS) allows you to outsource these challenging tasks around the clock to ensure your organizations cybersecurity and incident response plan is as effective as possible against cyberattack and systems compromise.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      " With security as a service (SECaaS), we implement a variety of services and solutions to defend your network and respond to potential incidents 24x7. We also put into place a vulnerability management program that matches your operational risk level. InfoSight's SECaaS offering simplifies your overall cybersecurity effort into an affordable subscription-based “pay as you go” model. It reduces the challenges associated with hiring and retaining cybersecurity experts and managing a 24x7 internal team saving your organization time and money!",
  },
];

const SS_FEATURES_DATA = [
  "SOCaaS",
  "Managed MDR",
  "Managed EDR",
  "Managed XDR & SIEM",
  "VISO and VCISO",
  "DLP Solutions",
  "Access and Identity Management",
  "And more…",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="SECaaS"
      heroImg={heroImg}
      heroTitle={"Security as a Service (SECaaS)"}
      path={`Home / Services & Solutions / SECaaS`}
      overviewDescription={
        <p>
          InfoSight&apos;s Security as a Service (SECaaS) detects cyber threats
          quickly and simplifies incident response 24x7x365. Our SECaaS offering
          streamlines your cybersecurity defenses into one affordable
          subscription-based model.
        </p>
      }
      downloadLink={`https://www.infosightinc.com/pdf/InfoSight-Security-as-a-Service-SECaaS.pdf`}
      data={SECURITY_SERVICES_DATA}
      dataLabel={"SECURITY_SERVICES_DATA"}
      featuresData={SS_FEATURES_DATA}
      featureTitle={"Key Service Features"}
    />
  );
};

export default page;
