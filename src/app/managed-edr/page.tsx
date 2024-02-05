"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Managed-EDR.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const MANAGED_EDR_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Endpoints represent a significant security risk to all organizations no matter the industry. Relying solely on alerts to end users and overloaded network administrators is no longer the best and most effective method to protect against threats. Responding to endpoint-focused attacks has never been more challenging and is a 24x7 task that exhausts IT personnel. Additionally, AI is creating deep fakes so good they are nearly impossible to spot! So, it's not a matter of if, but when an employee clicks…",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight's EDR Service monitors triages and remediates malware attacks and infections thereby significantly enhancing visibility of attacks targeting endpoint devices. Our trusted professionals quickly coordinate remediation support and incident response solutions through patterns and AI-enabled technologies for immediate endpoint defense. We can leverage your endpoint application or provide a world-class EDR application for your organization.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "Our goal is to work with your team to ensure 24x7 security, incident response and remediation to improve your overall security posture and minimize cyber risk. InfoSight's team of expert analysts alleviate resource constrained IT teams by providing the knowledge and EDR expertise needed to defend and respond against any attacks missed at the endpoint.",
  },
];

const MANAGED_EDR_FEATURES_DATA = [
  "24x7 Comprehensive Security Monitoring",
  "Containment, Mitigation & Remediation",
  "Incident Response",
  "Attack Intelligence",
  "Behavior Monitoring",
  "Endpoint Policy Creation & Management",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Managed EDR | Infosight"
      heroImg={heroImg}
      heroTitle={"Managed Endpoint Detection and Response"}
      path={`Home / Services & Solutions / Managed Services / Managed EDR`}
      overviewDescription={
        <>
          <p className="text-[#444444]">
            Early detection of attacks targeting endpoints is critical to
            protecting networks from all types of threats including ransomware.
            However, without a team of security experts working 24x7x365 to
            proactively protect your organization from threats, it&apos;s
            unlikely to achieve the outcome in threat prevention everyone is
            looking to for. InfoSight&apos;s Endpoint Detection & Response (EDR)
            service provides you with real time incident response, remediation
            and threat containment you need 24x7x365. Coupled with our Security
            Operations Center (SOC), we serve as your own trusted cybersecurity
            team.
          </p>
        </>
      }
      downloadLink="/pdfs/InfoSight Endpoint-Detection-Response-EDR.pdf"
      data={MANAGED_EDR_DATA}
      dataLabel={"MANAGED_EDR_DATA"}
      featuresData={MANAGED_EDR_FEATURES_DATA}
      featureTitle={"Key Service Features"}
    />
  );
};

export default page;
