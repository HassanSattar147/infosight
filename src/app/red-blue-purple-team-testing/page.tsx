"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Vulnerability-&-CybersSecurity-Assessments.png";
// import infoImg1 from "/public/services-solutions/red-test.png";
// import infoImg2 from "/public/services-solutions/blue-test.png";
// import infoImg3 from "/public/services-solutions/purple-test.png";

const TEAM_ASSESSMENT_DATA = [
  {
    // img: infoImg1,
    title: "Red Team Testing",
    description:
      "Red Team Testing services imitate motivated and heavily resourced attackers by using advanced tactics, techniques, and tools to compromise the and achieve realistic goals. This method of assessment is geared towards mature environments with a highly evolved security culture. This is a realistic adversary attack simulation of a bad actor and will identify technical and behavioral security control weaknesses. Red Team testing elevates an already mature security-aware organization by exercising all aspects of their prevention, detection, and response capabilities and demonstrates the return on their investment in security.",
  },
  {
    // img: infoImg2,
    title: "Blue Team Testing",
    description:
      "InfoSight's testing focuses on assessing and improving your organization's defense mechanisms and incident response capabilities. It involves simulating various cyber threats and attacks to evaluate how well an organization's security team, processes, detects, respond to, and mitigate these threats effectively. It plays a vital role in enhancing an organization's overall cybersecurity resilience by identifying weaknesses and facilitating improvements in security measures.",
  },
  {
    // img: infoImg3,
    title: "Purple Team Testing",
    description:
      "Here, we take a collaborative cybersecurity testing approach with your team that combines elements of both red teaming and blue teaming. It focuses on improving an organization's overall security posture by enhancing communication and cooperation between the offensive (red) and defensive (blue) security teams. Purple team testing is designed to ensure that both teams work together effectively to identify vulnerabilities, test security controls, and improve incident detection and response capabilities. Purple team testing bridges the gap between offensive and defensive cybersecurity activities. It promotes a proactive and cooperative approach to cybersecurity by ensuring that the red and blue teams work together to strengthen the organization's security defenses, identify vulnerabilities, and enhance incident response capabilities.",
  },
];

const TA_FEATURES_DATA = [
  "Reduce the risk of a successful attack before it occurs",
  "Identify security issues beyond the capability of automated tools",
  "Prioritize your risks and quickly take the right preventative measures",
  "Help meet compliance requirements before deadlines",
];

const page = () => {
  return (
    <ServicePageLayout
      pageTitle="Red, Blue & Purple Team Testing - InfoSight"
      heroImg={heroImg}
      heroTitle={"Red, Blue & Purple Team Assessments"}
      path={`Home / Services & Solutions / Advisory Services / Security / Red, Blue &
      Purple Team Assessments`}
      overviewDescription={
        <p className="  text-[#444444]">
          Our Red Team, Blue Team, and Purple Team Testing assists organizations
          in vulnerability detection and threat hunting by accurately simulating
          common threat scenarios. The goal is to collaborate with your team to
          identify and defend your organization from different types of threats.
          The testing plan is unique to your organization&apos;s operational
          environment and existing attack surface. We take a strategic approach
          to the planning but employ tactical expertise to execute the testing.
        </p>
      }
      downloadLink={`/pdfs/InfoSight Red-Blue-Purple-Team-Testing.pdf`}
      data={TEAM_ASSESSMENT_DATA}
      dataLabel={"TEAM_ASSESSMENT_DATA"}
      featuresData={TA_FEATURES_DATA}
      featureTitle={"Key Benefits"}
    />
  );
};

export default page;
