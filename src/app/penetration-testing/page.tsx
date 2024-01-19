"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Vulnerability-&-CybersSecurity-Assessments.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const PENETRATION_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Today all organizations face the risks of ransomware attacks and AI-powered cyber-attacks. Staying ahead of bad actors often seems like a losing battle. That's where we come in!",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "Our expert security assessors test your network to identify vulnerabilities that could be exploited by a bad actor. Our assessments are goal-oriented and designed to test not just your Network, but also your Applications, APIs, Mobile Apps, Web Apps and SCADA/ICS Networks, as well as your organization's ability to respond to security incidents. Our reports are comprehensive, providing both in-depth technical reports that include exploit videos and remediation instructions. Additionally, executive-level reporting. Is provided to suit your C-Suite, BOD, and 3rd party audit audiences.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "Our comprehensive assessments leverage over 2 decades of experience and knowledge of the most current attack vectors including AI, to deliver the most actionable data. Our personalized approach will help quantify your cyber risk, prioritize the most critical threats, and create a continuous threat exposure management roadmap.",
  },
];

const PENETRATION_FEATURES_DATA = [
  "Evaluate environments for real-world readiness",
  "Reduce the risk of a successful attack before it occurs",
  "Identify security issues beyond the capability of automated tools & assessments",
  "Exit interviews to provide both executive level and detailed reports",
  "Reduce the risk of a successful attack before it occurs",
  "Goes beyond typical penetration testing to involve mission-oriented Red Teaming operations",
  "Prioritize your risks and quickly take the right preventative measures",
  "Assists in implementing a Continuous Threat Exposure Management (CTEM) strategy",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Penetration Testing | InfoSight"
      heroImg={heroImg}
      heroTitle={"Penetration Testing"}
      path={`Home / Services & Solutions / Advisory Services / Security / Penetration
      Testing`}
      overviewDescription={
        <p className=" text-[#444444] lg:w-8/12">
          InfoSight's Penetration Testing services reduce the risk of successful
          cyberattacks by attempting to exploit identified vulnerabilities
          before a bad actor does. With over two decades of experience in
          security, compliance and risk management, our experts work to identify
          security issues beyond the capability of automated tools and
          assessments/tests. As AI continues to evolve, cyberattacks will
          continue to become more complex requiring a systemic approach to
          testing.
        </p>
      }
      downloadLink={`https://www.infosightinc.com/pdf/InfoSight-Penetration-Testing.pdf`}
      videoLink="https://www.infosightinc.com/Videos/infosight-video.mp4"
      data={PENETRATION_DATA}
      dataLabel={"PENETRATION_DATA"}
      featuresData={PENETRATION_FEATURES_DATA}
      featureTitle={"Key Benefits"}
    />
  );
};

export default page;
