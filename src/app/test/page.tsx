"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/pavms.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const PATCH_VULNERABILITY_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Today, most IT departments are stretched thin and keeping up with patches and vulnerabilities has become a full-time job. Adversaries utilizing attack vectors frequently seek to exploit vulnerabilities on systems that have not yet been patched against publicly available exploits. This leaves your organization at risk for a costly attack that could shut down business for good.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight's proactive Patch & Vulnerability Management Services can act as an extension to your IT department to identify and, deploy critical patches 24x7.Our US-based NOC operates 24x7, meaning our Network Engineers apply patches after work hours to minimize interruption and facilitate a stable and secure environment.We continuously scan devices and applications for missing required patches and from there, we test and determine which applications can be patched/updated and apply them for you.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "With our patch management approval and rollout process, testing can occur prior to updating the entire population of servers and workstations. Additionally, our reporting is detailed and meets all regulatory requirements.",
  },
];

const PATCH_VULNERABILITY_FEATURES_DATA = [
  "Windows/Linux Server and Workstation Patches",
  "3rd party application patches",
  "Security Updates",
  "Critical Updates",
  "Service Packs",
  "Update Rollups",
  "Patch Reports",
  "Vulnerability Management",
];

const PATCH_VULNERABILITY_FEATURES_DATA2 = [
  "Windows/Linux Server and Workstation Patches",
  "3rd party application patches",
  "Windows/Linux Server and Workstation Patches",
  "3rd party application patches",
  "Windows/Linux Server and Workstation Patches",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Patch Vulnerability Management"
      heroImg={heroImg}
      heroTitle={"Patch & Vulnerability Management Services"}
      overviewDescription={
        <p className=" text-justify text-[#444444]">
          InfoSight&apos;s Patch Management services are designed to address
          Windows, Linux and 3rd party applications. Our services reduce the
          risk around the exploitation of vulnerabilities by applying critical
          security patches within the shortest timeframe.
        </p>
      }
      downloadLink={`https://www.infosightinc.com/pdf/InfoSight-Patch-Vulnerability-Management.pdf`}
      path={`Home / Services & Solutions / Managed Services / Patch & Vulnerability Management Services`}
      data={PATCH_VULNERABILITY_DATA}
      dataLabel={"PATCH_VULNERABILITY_DATA"}
      featuresData={PATCH_VULNERABILITY_FEATURES_DATA}
      featureTitle={"Key Service Features"}
      otherFeaturesData={PATCH_VULNERABILITY_FEATURES_DATA2}
      otherFeatureTitle={
        "Other Key Service Features " +
        PATCH_VULNERABILITY_FEATURES_DATA2.length
      }
    />
  );
};

export default page;
