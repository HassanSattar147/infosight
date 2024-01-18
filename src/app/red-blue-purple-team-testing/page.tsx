"use client";
import React from "react";
import ServicePageLayout from "@/components/Elements/ServicePageLayout";
import heroImg from "/public/services-solutions/Vulnerability-&-CybersSecurity-Assessments.png";
import infoImg1 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "/public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const TEAM_ASSESSMENT_DATA = [
  {
    img: infoImg1,
    title: "Red Team Testing",
    description:
      "Red Team Testing services utilize a strategic approach towards an organization to test the resilience of the target using custom sophisticated attacks. InfoSight imitates persistent, motivated, and heavily resourced attackers by using advanced tactics, techniques, and procedures to penetrate the organization and achieve realistic goals. This method of assessment is geared towards clients with a mature and highly evolved security posture. This is the highest capability testing level from an assailant and resistance maturity standpoint, which classifies methodological, technical, and behavioral security control weaknesses. Red Team testing elevates an already mature security-aware organization by exercising all aspects of their prevention, detection, and response capabilities and demonstrates the return on their investment in security.",
  },
  {
    img: infoImg2,
    title: "Blue Team Testing",
    description:
      "InfoSight's security experts conduct real-world attacks to determine your security weaknesses. Our extensive knowledge of the most current attack vectors, along with our expertise network types including on-premise Data Centers, Cloud or Hybrid environments will provide the assurance and confidence you need. This enables your team to concentrate on day-to-day business rather than on the discovery of potential network security risks.",
  },
  {
    img: infoImg3,
    title: "Purple Team Testing",
    description:
      "Purple Team Testing services combine red and blue teams and allow both teams to work closely together to maximize cyber capabilities through continuous feedback and knowledge transfer. Some organizations perform purple teaming as one-off focused engagements, whereby security goals, timelines, and key deliverables are clearly defined, and there is a formal process for evaluating lessons learned over the course of an operation. This includes recognizing offensive and defensive shortcomings and outlining future training and technological requirements. An alternative approach gaining traction in the security market is to view purple teaming as a conceptual framework that runs throughout an organization, establishing permanent communication channels and fostering a collaborative and transparent culture that promotes continuous cybersecurity improvement.",
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
        <p className=" lg:w-10/12 text-[#444444]">
          InfoSight performs Red Team, Blue Team, and/or Purple Team Testing for
          organizations to assist in vulnerability detection, threat hunting,
          and network monitoring by accurately simulating common threat
          scenarios and facilitating the creation of new techniques designed to
          prevent and detect new types of threats. Each testing is unique to
          your organization and takes a strategic approach to establish the
          effectiveness of your systems and network&apos;s security posture.
          <br />
          <br />
          <span className="font-semibold">So, what&apos;s the difference?</span>
        </p>
      }
      downloadLink={`https://www.infosightinc.com/pdf/InfoSight-Red-Blue-Purple-Team-Testing.pdf`}
      data={TEAM_ASSESSMENT_DATA}
      dataLabel={"TEAM_ASSESSMENT_DATA"}
      featuresData={TA_FEATURES_DATA}
      featureTitle={"Key Benefits"}
    />
  );
};

export default page;
