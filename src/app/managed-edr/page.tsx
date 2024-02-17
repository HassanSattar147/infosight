"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Managed-EDR.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const MANAGED_EDR_DATA = [
  {
    // img: infoImg1,
    useType2: true,
    title: "The Challenge",
    description:
      "Endpoints represent a significant security risk to all organizations no matter the industry. Relying solely on alerts to end users and overloaded network administrators is no longer the best and most effective method to protect against threats. Responding to endpoint-focused attacks has never been more challenging and is a 24x7 task that exhausts IT personnel. Additionally, AI is creating deep fakes so good they are nearly impossible to spot! So, it's not a matter of if, but when an employee clicks…",
  },
  {
    // img: infoImg2,
    useType2: true,
    title: "How We Solve It",
    description:
      "InfoSight's EDR Service monitors triages and remediates malware attacks and infections thereby significantly enhancing visibility of attacks targeting endpoint devices. Our trusted professionals quickly coordinate remediation support and incident response solutions through patterns and AI-enabled technologies for immediate endpoint defense. We can leverage your endpoint application or provide a world-class EDR application for your organization.",
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
          <p className="text-[#444444] text-justify">
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
