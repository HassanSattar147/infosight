"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Managed-Detection-Response-img.png";
import infoImg1 from "/public/24x7-ics-scada-challenge.png";
import infoImg2 from "/public/24x7-ics-scada-deliver.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const DETECTION_RESPONSE_DATA = [
  {
    img: infoImg1,
    // useType2: true,
    title: "The Challenge",
    description:
      "Attackers work 24x7, while most organizations technical support staff do not… This creates delayed response to cyber threats, and attacks on critical infrastructure can have devastating consequences. Additionally, most SIEMs and XDRs don't have support for many legacy protocols and devices, so visibility is very limited and purpose-built toolsets are needed. Exacerbating the challenge is the effort required to analyze all security events, which can be unrealistic without outside help. Not to mention tighter cybersecurity budgets and the fact that recruiting and retaining cybersecurity analysts is probably the most challenging it has been in decades.",
  },
  {
    img: infoImg2,
    // useType2: true,
    title: "How We Deliver It",
    description: (
      <>
        <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
          InfoSight's Security Operations Center (SOC) operates as your own
          trusted cybersecurity team providing you with real time 24x7 threat
          monitoring, analysis, escalation, and where possible triage and
          remediation. We bring a co-managed approach to security monitoring,
          and we accomplish our tasks by delivering multiple security packages
          for comprehensive threat detection.
        </p>
        <h4 className="py-2 font-semibold">
          We enable non-disruptive monitoring of distributed ICS networks for
          changes in topology and behavior, using multiple security packages,
          each offering a unique capability pertaining to a specific type of
          network activity:
        </h4>
        <div className="p-2 flex">
          <span className="pr-2 font-bold">1.</span>
          <p>
            <span className="font-bold">NETWORK VISIBILITY: </span> Using
            passive scanning of all OT network traffic, iSID creates a visual
            network model for all devices, protocols and sessions, with alerts
            upon detected topology changes (e.g. new devices or sessions.)
          </p>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 font-bold">2.</span>
          <p>
            <span className="font-bold">CYBER ATTACK: </span> The Cyber Attack
            package handles known threats designed to the ICS network, including
            PLCs, RTUs and industrial protocols, based on data from open-source
            intelligence as well as our own cyber research.
          </p>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 font-bold">3.</span>
          <p>
            <span className="font-bold">POLICY MONITORING: </span> Define/modify
            policies for each network link, for validating specific commands
            (e.g. “write to controller”) and operational ranges.
          </p>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 font-bold">4.</span>
          <p>
            <span className="font-bold">ANOMALY DETECTION: </span> The Anomaly
            Detection package creates a behavioral network model using multiple
            parameters, including device sequence sampling time, and more,
            toward detecting behavioral anomalies.
          </p>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 font-bold">5.</span>
          <p>
            <span className="font-bold">OPERATIONAL BEHAVIOR: </span> Monitor
            and audit the management of devices (PLC, RTU & IED) at remote
            sites, with alerts for firmware changes or configuration
            modifications (e.g. software updates or turning edge devices on or
            off) and activity logging.
          </p>
        </div>
        <div className="p-2 flex">
          <span className="pr-2 font-bold">6.</span>
          <p>
            <span className="font-bold">MAINTENANCE MANAGEMENT: </span> Limit
            network exposure during scheduled maintenance by creating work
            orders for specific devices during set time windows. A log report of
            all maintenance activities is issued upon session completion.
          </p>
        </div>
      </>
    ),
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

const DETECTION_RESPONSE__FEATURES_DATA = [
  "Central-location deployment",
  "Collectors) or local deployment at remote sites",
  "Network traffic analysis of ICS protocols based on DPI",
  "Supervision over configuration changes in PLCs",
  "Model-based anomaly detection analytics, signature-based",
  "detection of known vulnerabilities",
  "Non-intrusive network operation",
  "Low false-alarm rate",
  "Central management of multiple iSID instances using iCEN",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="24x7-ICS-SCADA-MDR"
      heroImg={heroImg}
      heroTitle={"24x7 ICS, SCADA & OT MDR"}
      path={`Home / Services & Solutions / Managed Services / 24x7 ICS, SCADA & OT MDR`}
      overviewDescription={
        <p className="">
          24x7 Threat Monitoring of Industrial Control Systems (ICS), SCADA
          Networks and OT environments require a specialized approach and
          expertise. Beyond Command and Control, there are Field Devices and
          Communication networks that must be considered as part of the attack
          surface. Critical Infrastructure has become a high-value target for
          many state-sponsored attackers and this bad actor activity is on the
          rise, so 24x7 threat monitoring is now a necessity.
        </p>
      }
      downloadLink={`https://www.infosightinc.com/pdf/InfoSight-24x7-IT-Managed-Detection-Response.pdf`}
      data={DETECTION_RESPONSE_DATA}
      dataLabel={"DETECTION_RESPONSE_DATA"}
      featuresData={DETECTION_RESPONSE__FEATURES_DATA}
      featureTitle={"Key Benefits"}
    />
  );
};

export default page;
