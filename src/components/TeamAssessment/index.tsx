"use client";
import React from "react";
import Image from "next/image";
import documentIcon from "../../../public/homepage/document-icon.svg";
import infoImg1 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";
import TeamAssessmentHero from "./Sub/TeamAssessmentHero";
import TeamAssessmentFeatures from "./Sub/TeamAssessmentFeatures";
import Link from "next/link";
import PageLayout from "../PageLayout";

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

const TeamAssessment = () => {
  React.useEffect(() => {
    document.title = "Red, Blue & Purple Team Testing - InfoSight";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <TeamAssessmentHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / Advisory Services / Security / Red, Blue &
        Purple Team Assessments
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-20 justify-between">
            <p className=" lg:w-10/12 text-[#444444]">
              InfoSight performs Red Team, Blue Team, and/or Purple Team Testing
              for organizations to assist in vulnerability detection, threat
              hunting, and network monitoring by accurately simulating common
              threat scenarios and facilitating the creation of new techniques
              designed to prevent and detect new types of threats. Each testing
              is unique to your organization and takes a strategic approach to
              establish the effectiveness of your systems and network&apos;s security
              posture.
              <br />
              <br />
              <span className="font-bold">So, what&apos;s the difference?</span>
            </p>
            <Link
              href="https://www.infosightinc.com/pdf/InfoSight-Red-Blue-Purple-Team-Testing.pdf"
              target="_blank"
              className="lg:w-3/12"
            >
              <div className="flex gap-5 items-center">
                <Image src={documentIcon} alt="" />
                <p className=" text-[#8C340D] font-semibold">
                  Download Overview
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-20">
        {TEAM_ASSESSMENT_DATA.map(({ img, title, description }, i) => {
          return (
            <div
              key={"TEAM_ASSESSMENT_DATA__" + i}
              className={`py-5 lg:py-10 flex flex-col-reverse lg:flex-row justify-between gap-5 +
              ${i % 2 === 1 ? " lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              <Image src={img} alt="" className="w-full rounded-lg" />
              <div className="flex flex-col justify-between w-full">
                <h1 className="lg:text-2xl text-gray-900 font-semibold">
                  {title}
                </h1>
                <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <TeamAssessmentFeatures />
    </PageLayout>
  );
};

export default TeamAssessment;
